import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import CountryList from './components/CountryList';
import { buildUrl } from './utils/fetchCountries';
import useDebounce from './utils/useDebounce';

export default function App() {
  const [countries, setCountries] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [search, setSearch] = useState(''); 
  const [region, setRegion] = useState('all'); 
  const debouncedSearch = useDebounce(search, 500); 

  const fetchData = useCallback(async (nameOrRegion) => {
    setLoading(true);
    setError(null);

    const url = buildUrl({ search: debouncedSearch, region });

    try {
      const res = await fetch(url);
      if (!res.ok) {
        
        const text = await res.text();
        throw new Error(`${res.status} ${res.statusText} ${text}`.trim());
      }
      const data = await res.json();
      
      setCountries(Array.isArray(data) ? data : []);
    } catch (err) {
      
      if (err.message && err.message.includes('404')) {
        setCountries([]);
        setError(null);
      } else {
        setError(err.message || 'Failed to load countries');
      }
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, region]);

  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleRetry() {
    fetchData();
  }

  function handleClearFilters() {
    setSearch('');
    setRegion('all');
  }

  
  return (
    <div className="app">
      <Header />
      <main className="container">
        <div className="controls-row card">
          <Controls
            search={search}
            onSearch={setSearch}
            region={region}
            onRegion={setRegion}
            onClear={handleClearFilters}
          />
        </div>

        <section className="card">
          {loading ? (
            <div className="center">Loading countries...</div>
          ) : error ? (
            <div>
              <div className="error">Error: {error}</div>
              <div style={{marginTop:10}}>
                <button className="button" onClick={handleRetry}>Retry</button>
              </div>
            </div>
          ) : (
            <CountryList countries={countries} />
          )}
        </section>
      </main>
    </div>
  );
}