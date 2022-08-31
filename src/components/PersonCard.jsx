import React, { Component } from "react";

export default class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }

  render() {
    const birthday = () => {
      this.setState({ age: this.state.age + 1 });
    };
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>hair Color: {hairColor} </p>
        <button onClick={birthday}>
          Birthday button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}
