import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <footer>
          SheCodes Homework from Anuoluwapo{" "}
          <a
            href="https://github.com/merciTito/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            and is Open-sourced on Git-hub
          </a>
        </footer>
      </div>
    </div>
  );
}
