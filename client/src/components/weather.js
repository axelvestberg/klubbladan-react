import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      currentTemp: "",
      cityName: "",
      weatherDescription: "",
      icon: ""
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
            weatherDesc: data.data.weather[0].description,
            icon: data.data.weather[0].icon,
            img: "http://openweathermap.org/img/w/" + data.data.weather[0].icon + ".png"
          },
          () => console.log("Fetched weather data...", data),
                console.log("Weather description: ", data.data.weather[0].description),
                console.log("icon: ", data.data.weather[0].icon)
        );
      });
  }

  render() {
    const ts = this.state;
    const CurrentWeather = (
      <div>
        <p>{ts.cityName}: {ts.currentTemp}&#8451; and {ts.weatherDesc}</p>
        <img src={ts.img} alt={ts.weatherDesc}/>
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
