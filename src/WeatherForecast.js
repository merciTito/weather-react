import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun.</div>
          <WeatherIcon code="02d" size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">69°</span>
            <span className="WeatherForecast-temperature-min">59°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-day">Sun.</div>
          <WeatherIcon code="02d" size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">69°</span>
            <span className="WeatherForecast-temperature-min">59°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sun.</div>
          <WeatherIcon code="02d" size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">69°</span>
            <span className="WeatherForecast-temperature-min">59°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sun.</div>
          <WeatherIcon code="02d" size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">69°</span>
            <span className="WeatherForecast-temperature-min">59°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sun.</div>
          <WeatherIcon code="02d" size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">69°</span>
            <span className="WeatherForecast-temperature-min">59°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
