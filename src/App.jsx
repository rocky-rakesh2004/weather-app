import React, { useState } from "react";
import Search from "./components/Search";
import WeatherIcon from "./components/WeatherIcon";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    if (!city) return;

    const apiKey = "f28c94d0319ac76944d7c9abd91555cc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch weather data");
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherIcon weather={weatherData} />}
    </div>
  );
};

export default App;
