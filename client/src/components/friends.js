import React, { Component } from "react";
import "./friends.css";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    fetch("/friends")
      .then(res => res.json())
      .then(friends =>
        this.setState({ friends }, () =>
          console.log("Fetched friends data...", friends)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Friends</h2>
        <ul>
          {this.state.friends.map(friend => (
            <li key={friend.id}>
              {friend.firstName} {friend.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Friends;
