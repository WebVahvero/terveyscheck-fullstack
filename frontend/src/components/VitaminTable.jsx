import { VITAMINS } from '../data'

export default function VitaminTable({ gender }) {
  return (
    <div className="vitamin">
      <table>
        <thead>
          <tr>
            <th>Vitamiini</th>
            <th>Lähteitä</th>
            <th>Tehtävät</th>
            <th>Puutosoireet</th>
            <th>Päivittäinen tarve</th>
          </tr>
        </thead>
        <tbody>
          {VITAMINS.map((vitamin) => (
            <tr key={vitamin.name}>
              <td>{vitamin.name}</td>
              <td>{vitamin.sources}</td>
              <td>{vitamin.tasks}</td>
              <td>{vitamin.deficiency}</td>
              <td>{gender ? vitamin.need[gender] : '–'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}