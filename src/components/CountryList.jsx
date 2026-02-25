import React from 'react';
import CountryCard from './CountryCard';

export default function CountryList({ countries }) {
  if (!Array.isArray(countries)) return <div className="no-results">No results found</div>;
  if (countries.length === 0) return <div className="no-results">No results found</div>;

  return (
    <div className="list">
      {countries.map(country => {
        
        const key = country.cca3 || country.ccn3 || (country.name && country.name.common) || JSON.stringify(country);
        return <CountryCard key={key} country={country} />;
      })}
    </div>
  );
}