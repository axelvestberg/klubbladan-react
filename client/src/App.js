import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/friends";
import Weather from "./components/weather";
import Countdown from "./components/countdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Klubb Ladan</h1>
        </header>
        <Friends />
        <Weather />
        <Countdown />
      </div>
    );
  }
}

export default App;
