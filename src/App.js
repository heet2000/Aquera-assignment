// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';
import  "./css/App.css";

function App() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/?format=json&page=${currentPage}`);
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlanets();
  }, [currentPage]);

  return (
    <>
      <div className='container'>
        {planets.map(planet => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
