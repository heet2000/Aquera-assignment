// PlanetCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentList from './ResidentList';
import "./css/PlanetCard.css"

function PlanetCard({ planet }) {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const residentPromises = planet.residents.map(url => axios.get(url));
        const residentResponses = await Promise.all(residentPromises);
        const residentData = residentResponses.map(response => response.data);
        setResidents(residentData);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className='planet-card'>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <ResidentList residents={residents} />
    </div>
  );
}

export default PlanetCard;
