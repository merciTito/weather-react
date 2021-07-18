import React from "react";
import axios from "axios";
export default function Weather() {
  const apiKey = "f53fa921ea7266dbd234fa129e5543c0";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="search for a city...."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Thursday 1:00</li>
        <li>Clear</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearFix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">76</span>
              <span className="unit">°c</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 81%</li>
            <li>Wind: 0 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
