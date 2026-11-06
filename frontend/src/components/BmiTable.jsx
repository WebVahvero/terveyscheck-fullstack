import { BMI_ROWS } from '../data'

export default function BmiTable({ highlight }) {
  return (
    <div className="bmitable-wrapper">
      <table>
        <thead>
          <tr>
            <th>Painoluokka</th>
            <th>Painoindeksi</th>
          </tr>
        </thead>
        <tbody>
          {BMI_ROWS.map((row) => (
            <tr key={row.id} className={row.id === highlight ? 'highlight' : undefined}>
              <td>{row.label}</td>
              <td>{row.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}