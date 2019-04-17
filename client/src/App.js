import React, { Component } from "react";
import "./App.css";
import Friends from "./components/friends";
import Weather from "./components/weather";
import Countdown from "./components/countdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Klubb Ladan</h1>
          <Countdown />
        </header>
        <Friends />
        <Weather />
      </div>
    );
  }
}

export default App;
