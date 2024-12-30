import React, { useState } from "react";
import axios from "axios";
import Icons from "./Icons";

export default function Weather({ city }) {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  if (city && !loaded) {
    let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setTemperature(Math.round(response.data.main.temp));
        setDescription(response.data.weather[0].description);
        setWind(response.data.wind.speed);
        setHumidity(response.data.main.humidity);
        setLoaded(true);
        setError(null);

        console.log(
          "Weather description:",
          response.data.weather[0].description
        );
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoaded(false);
      });
  }

  if (!temperature && !error) {
    return null;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Wind: {wind} m/s</li>
        <li>Humidity: {humidity}%</li>
        <li>
          <Icons description={description} />
        </li>
      </ul>
    </div>
  );
}
