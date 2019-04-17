import React, { Component } from "react";
import "./countdown.css";

class Countdown extends Component {
  constructor() {
    super();
    this.state = {
      daysLeft: "",
    }
  }

  timeLeft() {
    let today = new Date();
    let midsommar = new Date(2019, 6, 22, 13, 99, 99, 999);
    midsommar.setFullYear(today.getFullYear());
    let msPerDay = 24 * 60 * 60 * 1000;
    let daysLeft = (midsommar.getTime() - today.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft);
    console.log('days to midsummer: ', daysLeft)
  
    this.setState({
      daysLeft: daysLeft,
    })
  }

  componentDidMount() {
    this.timeLeft()
  }

  render() {
    return (
      <div>
        <h2>Dagar kvar</h2>
        {this.state.daysLeft}
      </div>
    );
  }
}

export default Countdown;
