import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      currentTemp: "",
      cityName: "",
      weatherDescription: "",
    };
  }

  componentDidMount() {
    fetch("/weather")
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            currentTemp: Math.round(data.data.main.temp),
            cityName: data.data.name,
            weatherDescription: data.data.weather.description
          },
          () => console.log("Fetched weather data...", data)
        );
      });
  }

  render() {
    const CurrentWeather = (
      <div>
        <h2>{this.state.cityName}</h2>
        <p>{this.state.currentTemp} &#8451;</p>
        <p>{this.state.weatherDescription}</p>
      </div>
    );

    return (
      <div>
        <h2>Weather</h2>
        {CurrentWeather}
      </div>
    );
  }
}

export default Weather;
