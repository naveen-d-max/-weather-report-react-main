import { useEffect, useState } from "react";
import axios from "axios";
import WeatherBanner from "./WeatherBanner";
import Card from "./Card";
import Weekly from "./Weekly";
import HourlyForecast from "./HourlyForecast";

function Navbar() {
  const [city, setcity] = useState("");

  const [weather, setweather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const APIkey = "d028ef91c7abd2a6603694bd8eb3d034";

  const handleChange = (event) => {
    setcity(event.target.value);
  };

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`,
      );
      setweather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("City not found");
    }
  };
  const fetchForecast = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric`,
      );

      const dailyForecast = response.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00"),
      );
      setforecast(dailyForecast);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };
  useEffect(() => {
    const updateWeather = async () => {
      await fetchWeather("Erode");
    };
    const updateForecast = async () => {
      await fetchForecast("Erode");
    };
    updateWeather();
    updateForecast();
  }, []);

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter city name");
      return;
    }
    fetchWeather(city);
    fetchForecast(city);
    setcity("");
  };

  return (
    <>
      <section className="nav_section">
        <h1 className="nav_heading">Weather</h1>
        <div className="nav_input-box">
          <div className="nav_search-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="search_icon size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Enter city name.."
              onChange={handleChange}
              value={city}
            />
          </div>
          <button className="nav_input-btn" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </section>
      {weather && (
        <>
          <WeatherBanner weather={weather} />
          <Card weather={weather} />
        </>
      )}
      {forecast && (
        <>
          <Weekly forecast={forecast} />
          <HourlyForecast />
        </>
      )}
    </>
  );
}
export default Navbar;
