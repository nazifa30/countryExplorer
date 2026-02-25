import React from 'react';

function safeNumber(n) {
  if (typeof n !== 'number') return 'Unknown';
  return n.toLocaleString();
}

export default function CountryCard({ country }) {
  
  const flag = country?.flags?.svg || country?.flags?.png || '';
  const name = country?.name?.common || 'Unknown';
  const region = country?.region || 'Unknown';
  const population = safeNumber(country?.population);

  return (
    <div className="card-country">
      <div style={{height:120}}>
        {flag ? (
          <img src={flag} alt={`Flag of ${name}`} className="flag" />
        ) : (
          <div className="flag" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'var(--muted)'}}>No flag</div>
        )}
      </div>

      <div>
        <div className="country-name">{name}</div>
        <div className="small-muted">Region: {region}</div>
        <div className="small-muted">Population: {population}</div>
      </div>
    </div>
  );
}