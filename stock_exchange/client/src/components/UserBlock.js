import React, { Component } from "react";
import Col from "./Col";
import Card from "./Card";
import ListItem from './StockList';
import Logout from './Logout';

class User extends Component {
    state = {
    name: "Luna",
    pass: "",
    symbols: ['WORK', 'TERP', 'IBM', 'VIA', 'T']
  }

  componentDidMount() {

  }

  componentWillMount() {

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
      <Card heading={this.state.name} logout={<Logout />}>
      {this.state.symbols.map( symbol => {
        return (
          <ListItem
            key={symbol}
            name={symbol}         
          />
        );
      })}
        </Card>
      </Col>
    );
  }
}

export default User;