import { BMI_ROWS, WAIST_COLUMNS } from '../data'

const number = new Intl.NumberFormat('fi-FI')

function statementText(name, result) {
  const bmiText = BMI_ROWS.find((row) => row.id === result.bmi_category).comment
  const waistText = WAIST_COLUMNS.find((column) => column.id === result.waist_category).comment
  const greeting = name.trim() ? `${name.trim()}, sinun` : 'Sinun'
  return (
    `${greeting} painoindeksisi on ${number.format(result.bmi)} ja olet ${bmiText}. ` +
    `Vyötärönympäryksesi ${waistText}.`
  )
}

export default function Results({ name, result, message }) {
  // React escapes text automatically, so user input can never run as HTML or script
  let statement = 'Täytä tiedot ja paina Laske.'
  if (message) statement = message
  else if (result) statement = statementText(name, result)

  const show = (value, unit) => (result ? `${number.format(value)} ${unit}` : '–')

  return (
    <>
      <div className="health-statement" aria-live="polite">
        <p>{statement}</p>
      </div>

      <div className="macro-nutrition">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Makroravintoaineiden tarve päivässä</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hiilihydraatit</td>
              <td>{show(result?.carbs_g, 'g')}</td>
            </tr>
            <tr>
              <td>Proteiini</td>
              <td>
                {result
                  ? `${number.format(result.protein_min_g)}–${number.format(result.protein_max_g)} g`
                  : '–'}
              </td>
            </tr>
            <tr>
              <td>Rasva</td>
              <td>{show(result?.fat_g, 'g')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="energy-need">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Energian tarve päivässä</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kalorit</td>
              <td>{show(result?.kcal, 'kcal')}</td>
            </tr>
            <tr>
              <td>Kilojoulet</td>
              <td>{show(result?.kj, 'kJ')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}