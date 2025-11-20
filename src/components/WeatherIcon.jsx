import CloudyIcon from "../assets/cloudy.png";
import DrizzleIcon from "../assets/drizzle.png";
import RainIcon from "../assets/rain.png";
import Clear from "../assets/sun.png";
import SnowIcon from "../assets/snow.png";
import HumidityIcon from "../assets/humidity.png";
import WindIcon from "../assets/wind.png";

const WeatherIcon = ({ weather }) => {
  if (!weather) return null;

  const getIcon = () => {
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("cloud")) return CloudyIcon;
    if (main.includes("drizzle")) return DrizzleIcon;
    if (main.includes("rain")) return RainIcon;
    if (main.includes("snow")) return SnowIcon;
    if (main.includes("clear")) return Clear;
    return Clear;
  };

  return (
    <div className="weather-container">
      <img src={getIcon()} alt="weather" className="main-icon" />
      <h2>{weather.name}</h2>
      <p className="temp">{weather.main.temp}°C</p>
      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <div className="detail-item">
          <img src={HumidityIcon} alt="humidity" />
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <img src={WindIcon} alt="wind" />
          <span>{weather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherIcon;
