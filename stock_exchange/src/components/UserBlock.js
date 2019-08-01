import React, { Component } from "react";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import API from "../utils/API";


class User extends Component {
  state = {
    user: "Luna",
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

  render() {
    return (
      <Col size="md-4">
        <Card heading={this.state.user}>
        </Card>
      </Col>
    );
  }
}

export default User;