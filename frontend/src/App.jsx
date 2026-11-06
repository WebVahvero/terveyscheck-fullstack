import { useState } from 'react'
import { createAssessment } from './api'
import AssessmentForm from './components/AssessmentForm'
import BmiTable from './components/BmiTable'
import Results from './components/Results'
import VitaminTable from './components/VitaminTable'
import WaistTable from './components/WaistTable'

const EMPTY_FORM = {
  name: '',
  height_cm: '',
  weight_kg: '',
  waist_cm: '',
  gender: 'male',
  age_group: 'young',
  free_activity: 'not-free-active',
  work_activity: 'not-work-active',
}

export default function App() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [result, setResult] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    // The name is only used for the greeting and is never sent to the server
    const measurements = { ...form }
    delete measurements.name

    try {
      const { result, errors } = await createAssessment(measurements)
      if (errors) {
        setFieldErrors(errors)
        setResult(null)
        setMessage('Tarkista punaisella merkityt kentät.')
      } else {
        setFieldErrors({})
        setResult({ ...result, gender: measurements.gender })
      }
    } catch {
      setMessage('Palvelimeen ei saatu yhteyttä. Yritä myöhemmin uudelleen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <section className="data">
        <AssessmentForm
          form={form}
          errors={fieldErrors}
          loading={loading}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <BmiTable highlight={result?.bmi_category} />
        <WaistTable highlight={result?.waist_category} gender={result?.gender} />
      </section>

      <section className="feedback">
        <Results name={form.name} result={result} message={message} />
      </section>

      <section className="vitamins">
        <VitaminTable gender={result?.gender} />
      </section>
    </main>
  )
}