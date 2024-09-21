import React from "react";

export default function Weather(props) {
  const { temperature, description, wind, humidity, icon } = props.weather;

  return (
    <ul>
      <li>Temperature: {Math.round(temperature)}°C</li>
      <li>Description: {description}</li>
      <li>Wind: {wind} km/h</li>
      <li>Humidity: {humidity}%</li>
      <li>
        <img src={icon} alt="Weather icon" />
      </li>
    </ul>
  );
}
