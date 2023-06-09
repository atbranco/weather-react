import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      {" "}
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: <span>{weatherData.date}</span>
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong> {weatherData.temperature}</strong>
              <span className="units">
                {" "}
                <a href="/">°C</a> | <a href="/">°F</a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span> {weatherData.wind} </span>km/h
            </li>
          </ul>
        </div>
      </div>
      <div>
        {" "}
        <a href="https://github.com/atbranco/weather-react">
          Open-source code
        </a>{" "}
        , by Ana Teresa Branco
      </div>
    </div>
  );
}
