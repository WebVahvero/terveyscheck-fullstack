import { WAIST_COLUMNS, WAIST_ROWS } from '../data'

export default function WaistTable({ highlight, gender }) {
  return (
    <div className="waisttable-wrapper">
      <table>
        <thead>
          <tr>
            <th></th>
            {WAIST_COLUMNS.map((column) => (
              <th key={column.id}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {WAIST_ROWS.map((row) => (
            <tr key={row.gender}>
              <td>{row.label}</td>
              {row.values.map((value, index) => {
                // Highlight only the cell that matches the user's gender and category
                const isMatch = row.gender === gender && WAIST_COLUMNS[index].id === highlight
                return (
                  <td key={WAIST_COLUMNS[index].id} className={isMatch ? 'highlight' : undefined}>
                    {value}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}