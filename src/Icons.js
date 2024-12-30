import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const Icons = ({ description }) => {
  const iconMap = {
    "clear sky": "CLEAR_DAY",
    "few clouds": "CLOUDY",
    "scattered clouds": "CLOUDY",
    "overcast clouds": "CLOUDY",
    "broken clouds": "CLOUDY",
    rain: "RAIN",
    drizzle: "RAIN",
    "light snow": "SNOW",
    snow: "SNOW",
    thunderstorm: "THUNDER",
  };

  const icon = iconMap[description.trim().toLowerCase()] || "CLEAR_DAY";

  const defaults = {
    icon: icon,
    color: "grey",
    size: 50,
    animate: true,
  };

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
};

export default Icons;
