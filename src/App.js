import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState("");

  return (
    <div>
      <h1>Weather App</h1>
      <Form setCity={setCity} />
      <Weather city={city} />
      <p> This project was coded by <a href="https://github.com/Paupog">Paulina Pogwizd</a> and is open-sourced on <a href="https://github.com/Paupog/weather-app-react" >GitHub</a> and hosted on <a href="https://weathapp.netlify.app/">Netlify</a></p>
    </div>
  );
}
