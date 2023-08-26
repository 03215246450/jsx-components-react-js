type TableProps = {
    name: string;
    id: number;
    age: number;
  };

import React from 'react'

export default function Table(props :TableProps) {
    const { name, id, age } = props;
  return (
    <div>
      <table>
        <thead className="thead">
          <tr className="tr">
            <th className="th">name</th>
            <th className="th">id</th>
            <th className="th">age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
