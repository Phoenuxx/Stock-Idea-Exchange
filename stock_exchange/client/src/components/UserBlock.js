import React, { Component } from "react";
import Col from "./Col";
import Card from "./Card";

class User extends Component {
  state = {
    name: "Luna",
    pass: "",
    lists: []
  }

  componentDidMount() {

  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  }

  render() {
    return (
      <Col size="md-4">
        <Card heading={this.state.name}>
        </Card>
      </Col>
    );
  }
}

export default User;