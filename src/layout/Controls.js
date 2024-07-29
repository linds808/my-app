import React from 'react';
import '../css/controls.css'

const Controls = ({ entriesPerPage, handleChangeEntriesPerPage, searchTerm, handleSearch }) => {
  return (
    <div className="controls">
      <label>
        Show
        <select value={entriesPerPage} onChange={handleChangeEntriesPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        entries
      </label>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default Controls;
