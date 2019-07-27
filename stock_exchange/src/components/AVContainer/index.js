import React, { Component } from "react";
import Header from './components/Header';
import Nav from './components/Navbar';
import Container from './components/Container';
import Graph from './components/Graph';
import Footer from './components/Footer';
import API from "../../utils/API";
import "./style.css";

class AVContainer extends Component {

  state = {
    result: {},
    metaData: {},
    timeSeries: {},
    search: ""
  };
  
  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchTicker("TERP");
  }

  searcTicker = query => {
    let object = {
      time: 0,
      value: 0
    };

    API.search(query)
    .then(
      // res => this.setState({ result: res.data })
      res => {
        const data = res.data;
        let timeSeries =  Object.keys(data["Time Series (5min)"]);
        let date;
         for(let i = 0; i < timeSeries.length; i++){
           console.log("___________I________");
           console.log(i);
           date = new Date(timeSeries[0]);
           object.time = date.getTime();
           object.value = data["Time Series (5min)"][timeSeries[0]]["4. close"];
          //  array.push(date.getTime());
        }
          console.log(data); 
          console.log("____Meta Data_____");
          console.log(data["Meta Data"]);
          console.log("____Time Series____");
          console.log(data["Time Series (5min)"]);
          console.log("____Single TS______");
          console.log(timeSeries);
          console.log("____Value__________");
          console.log(data["Time Series (5min)"][timeSeries[0]]["4. close"]); 
          console.log("____Object_________");
          console.log(object);

        }
        )
      .catch(err => console.log(err));
  };



  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTicker(this.state.search);
  };

  render() {
      return(
        <Container>
          <Header />
          <Nav />
          <Graph />
          <Footer />
        </Container>
      )
  }
}

export default AVContainer;