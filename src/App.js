import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "203fa770242fcd2b9555d832a88ea567";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div>
      <h1>Sky Scout</h1>
      <h4>Weather App</h4>
      <City handleSubmit={handleSubmit} updateCity={setCity} />
      {loaded && <Weather weather={weather} />}
      <footer>
        <center>
          <p>
            T👩‍💻Coded by{" "}
            <a href="https://github.com/Gracia-Gwati">Gracia Gwati</a>, code
            hosted on{" "}
            <a href="https://github.com/Gracia-Gwati/react-search">GitHub</a>{" "}
            and is hosted on
            <a href="https://gracia-react-search-first-attempt.netlify.app/">
              Netlify
            </a>
            .
          </p>
        </center>
      </footer>
    </div>
  );
}
