// Pagination.js
import React from 'react';

function Pagination({ currentPage, setCurrentPage }) {
  const handlePrev = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Pagination;
