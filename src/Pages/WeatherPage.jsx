import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Weather from '../components/Weather';

function WeatherPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const cityName = queryParams.get('cityName');
  const [city, setCity] = useState(cityName || '');

  const handleSearch = (event) => {
    event.preventDefault();
    if (city) {
      navigate(`/weather?cityName=${city}`);
    }
  };

  useEffect(() => {
    if (cityName) {
      setCity(cityName);
    }
  }, [cityName]);

  return (
    <div className="weather-page">
      <h1>Weather Page</h1>
      <form onSubmit={handleSearch}>
        <div className='input-search'>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name" />


        <button type="submit">Search</button>

       </div>
      </form>
      {city && <Weather city={city} />}
    </div>
  );
}

export default WeatherPage;
