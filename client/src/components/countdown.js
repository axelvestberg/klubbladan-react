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
  let midsommar = new Date(2019, 6, 22, 13, 99, 99, 999); // Set day and month
  midsommar.setFullYear(today.getFullYear()); // Set year to this year
  let msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
  let daysLeft = (midsommar.getTime() - today.getTime()) / msPerDay;
  daysLeft = Math.round(daysLeft); //returns days left in the year
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
        <h2>Countdown</h2>
        {this.state.daysLeft} dagar kvar till midsommar!
      </div>
    );
  }
}

export default Countdown;
