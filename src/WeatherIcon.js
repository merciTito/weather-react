import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "PARTLY_CLOUDY_DAY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "09d": "SHOWER_RAIN",
    "09n": "SHOWER_RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "THUNDERSTORM",
    "11n": "THUNDERSTORM",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "MIST",
    "50n": "MIST",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#0d6efd"
      size={props.size}
      animate={true}
    />
  );
}
