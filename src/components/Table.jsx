import React from 'react'
import jaadu from "./table.module.css"
const Table = (props) => {

  return (
    <table className={jaadu.theaaad}>
      <thead>
        <tr className={jaadu.tr}>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Maratial Status</th>
        </tr>
      </thead>
      <tbody className={jaadu.tboody}>
      {props.data.map((beta)=>(
        <tr key={beta.id}>
        <td>{beta.name}</td>
        <td>{beta.age}</td>
        <td>{beta.address}</td>
        <td>{beta.department}</td>
        <td>{beta.salary}</td>
        <td>{beta.single}</td>
    </tr>
       ))} 
    </tbody>

      </table>  
  )
}

export default Table