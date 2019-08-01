import React, { Component } from "react";
import Col from "./Col";
import Card from "./Card";
import Login from "./login";
// import API from "../utils/API";

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
          <Login
            user={this.state.user}
            pass={this.state.pas}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Card>
      </Col>
    );
  }
}

export default User;