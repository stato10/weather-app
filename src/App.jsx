import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersPage from './Pages/UsersPage';
import WeatherPage from './Pages/WeatherPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/weather" element={<WeatherPage />} />
    </Routes>
  );
}

export default App;
