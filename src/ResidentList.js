// ResidentList.js
import React from 'react';
import "./css/ResidentList.css"

function ResidentList({ residents }) {
  return (
    <div className='resident-list'>
      <h3>Residents:</h3>
      <ul>
        {residents.map(resident => (
          <li key={resident.name}>
            {resident.name} - Height: {resident.height}, Mass: {resident.mass}, Gender: {resident.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentList;
