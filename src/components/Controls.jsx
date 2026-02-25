
import React from 'react';


const REGIONS = ['all', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function Controls({ search, onSearch, region, onRegion, onClear }) {
  return (
    <div style={{display:'flex',gap:10,flexWrap:'wrap',width:'100%'}}>
      <input
        className="input"
        placeholder="Search countries by name..."
        value={search}
        onChange={e => onSearch(e.target.value)}
        aria-label="Search countries"
      />

      <select
        className="select"
        value={region}
        onChange={e => onRegion(e.target.value)}
        aria-label="Filter by region"
      >
        {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
      </select>

      <button className="button ghost" onClick={onClear} type="button">Clear filters</button>
    </div>
  );
}