import {
  AGE_OPTIONS,
  FREE_ACTIVITY_OPTIONS,
  GENDER_OPTIONS,
  WORK_ACTIVITY_OPTIONS,
} from '../data'

function NumberField({ name, label, unit, value, error, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        placeholder={unit}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
      />
      {error && <span className="field-error">{error}</span>}
    </>
  )
}

function SelectField({ name, label, options, value, error, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="field-error">{error}</span>}
    </>
  )
}

export default function AssessmentForm({ form, errors, loading, onChange, onSubmit }) {
  return (
    <div className="form-wrapper">
      {/* noValidate: the server validates the input and returns the error messages */}
      <form onSubmit={onSubmit} noValidate>
        <label htmlFor="name">Nimi (ei tallenneta)</label>
        <input id="name" name="name" placeholder="Nimi" value={form.name} onChange={onChange} />

        <NumberField name="height_cm" label="Pituus" unit="cm" value={form.height_cm} error={errors.height_cm} onChange={onChange} />
        <NumberField name="weight_kg" label="Paino" unit="kg" value={form.weight_kg} error={errors.weight_kg} onChange={onChange} />
        <NumberField name="waist_cm" label="Vyötärön ympärys" unit="cm" value={form.waist_cm} error={errors.waist_cm} onChange={onChange} />

        <SelectField name="gender" label="Sukupuoli" options={GENDER_OPTIONS} value={form.gender} error={errors.gender} onChange={onChange} />
        <SelectField name="age_group" label="Ikä" options={AGE_OPTIONS} value={form.age_group} error={errors.age_group} onChange={onChange} />
        <SelectField name="free_activity" label="Vapaa-ajan aktiivisuus" options={FREE_ACTIVITY_OPTIONS} value={form.free_activity} error={errors.free_activity} onChange={onChange} />
        <SelectField name="work_activity" label="Työn aktiivisuus" options={WORK_ACTIVITY_OPTIONS} value={form.work_activity} error={errors.work_activity} onChange={onChange} />

        <button type="submit" disabled={loading}>
          {loading ? 'Lasketaan…' : 'Laske'}
        </button>
      </form>
    </div>
  )
}