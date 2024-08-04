import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'a7f6151177b775ab63a12e500e83f6a6';

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setWeatherData(response.data);
          setError(null); // Clear any previous errors
        })
        .catch(error => {
           <div class="loader"></div>
            // setError('Error fetching weather data: ' + error.message);
          setWeatherData(null);
        });
    }
  }, [city]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData) {
    return <div className='loading'>

        <div class="loader" role="status"></div>

      </div>

    
    ;

  }

  return (
    <div className='border-zinc-50'>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />

    </div>
  );
}

export default Weather;
