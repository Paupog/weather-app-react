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
      <p> This app was coded by Paulina Pogwizd and hosted</p>
    </div>
  );
}
