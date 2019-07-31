import React, { Component } from "react";
import { createChart } from 'lightweight-charts';
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";

import API from "../utils/API";
// const  moment = require('moment');

function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
	var switcherElement = document.createElement('div');
	switcherElement.classList.add('switcher');

	var intervalElements = items.map(function(item) {
		var itemEl = document.createElement('button');
		itemEl.innerText = item;
		itemEl.classList.add('switcher-item');
		itemEl.classList.toggle('switcher-active-item', item === activeItem);
		itemEl.addEventListener('click', function() {
			onItemClicked(item);
		});
		switcherElement.appendChild(itemEl);
		return itemEl;
	});

	function onItemClicked(item) {
		if (item === activeItem) {
			return;
		}

		intervalElements.forEach(function(element, index) {
			element.classList.toggle('switcher-active-item', items[index] === item);
		});

		activeItem = item;

		activeItemChangedCallback(item);
	}

	return switcherElement;
}

var intervals = [ 'ID', '1D', '1W', '1M'];

var intraData= [];

var dayData = [];

var weekData = [];

var monthData = [];

var seriesData = new Map([
  ['ID', intraData ],
  ['1D', dayData ],
  ['1W', weekData ],
  ['1M', monthData ]  
]);

var switcherElement = createSimpleSwitcher(intervals, intervals[0], syncToInterval);

var chartElement = document.createElement('div');

var chart = createChart(chartElement, {
	width: 600,
  height: 300,
	layout: {
		backgroundColor: '#000000',
		textColor: '#d1d4dc',
	},
	grid: {
		vertLines: {
			visible: false,
		},
		horzLines: {
			color: 'rgba(42, 46, 57, 0.5)',
		},
	},
	priceScale: {
		borderVisible: false,
	},
	timeScale: {
		borderVisible: false,
	},
	crosshair: {
		horzLine: {
			visible: false,
		},
	},
});

var lineSeries = null;

function syncToInterval(interval) {
	if (lineSeries) {
		chart.removeSeries(lineSeries);
		lineSeries = null;
	}
	lineSeries = chart.addAreaSeries({
    topColor: 'rgba(76, 175, 80, 0.56)',
    bottomColor: 'rgba(76, 175, 80, 0.04)',
    lineColor: 'rgba(76, 175, 80, 1)',
    lineWidth: 2,
	});
	lineSeries.setData(seriesData.get(interval));
}

syncToInterval(intervals[0]); 



class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
    chartI: "",
    chartD: "",
    chartW: "",
    chartM: ""
  };



  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    // this.searchIntraDay("The Matrix");
    
document.querySelector(".card-body").appendChild(chartElement);
document.querySelector(".card-body").appendChild(switcherElement);

  }

  searchIntraDay = query => {

    API.searchIntra(query)
    .then(
      // res => this.setState({ result: res.data })
      res => {
        const data = res.data;
        let timeSeries = data["Time Series (5min)"];
        let date;
        console.log(this.state.chartEle);
        console.log(this.state.swtichEle);
        console.log(this.state);
        // for(let i = 0; i < 10; i++){
        //   date = new Date(timeSeries[i]);
        //   object.time = date.getTime();
        //   object.value = data["Time Series (5min)"][timeSeries[i]]["4. close"];
        //   array.push(object);
        //   console.log(i);
        //   console.log(timeSeries[i]);
        //   console.log(array);

        // }

        for (var timeCode in timeSeries) {

          let object = {
            time: 0,
            value: 0
          };

          date = new Date(timeCode);
          object.time = date.getTime();
          object.value = parseFloat(timeSeries[timeCode]["4. close"]);
          intraData.push(object);
        }

        // console.log(data);
        // console.log("____Meta Data_____");
        // console.log(data["Meta Data"]);
        // console.log("____Time Series____");
        // console.log(data["Time Series (5min)"]);
        // console.log("____Single TS______");
        // console.log(timeSeries);
        // console.log(timeSeries[timeCode]);
        // console.log("____Value__________");
        // console.log(data["Time Series (5min)"][timeSeries[9]]["4. close"]); 
        // console.log("____Object_________");
        // console.log(object);
        console.log("____intraData_________");
        console.log(intraData);
        this.setState({
          chartI:  lineSeries.setData([
            ...intraData
          ])
        });
      })
      .catch(err => console.log(err));
  };

  searchDaily = query => {

    API.searchDaily(query)
    .then(
      // res => this.setState({ result: res.data })
      res => {
        const data = res.data;
        let timeSeries = data["Time Series (Daily)"];
        let timeSeriesDate = Object.keys(timeSeries);
        for(let i = 0; i < timeSeriesDate.length; i++){
          let object = {
            time: 0,
            value: 0
          };
          object.time = timeSeriesDate[i];
          object.value = parseFloat(timeSeries[timeSeriesDate[i]]["4. close"]);
          dayData.push(object);
          // console.log(i);
          // console.log(timeSeriesDate[i]);
          // console.log(timeSeries[timeSeriesDate[i]]["4. close"]);
          // console.log(dayData);

        }

        // console.log(data);
        // console.log("____Meta Data_____");
        // console.log(data["Meta Data"]);
        // console.log("____Time Series____");
        // console.log(timeSeries);
        // console.log("____Single TS______");
        // console.log(timeSeries[timeCode]);
        // console.log("____Value__________");
        // console.log(timeSeries[timeSeriesDate[0]]["4. close"]); 
        // console.log("____Object_________");
        // console.log(object);
        console.log("____DayData___________");
        console.log(dayData);
        this.setState({
          chartD:  lineSeries.setData([
            ...dayData
          ])
        });
    }).catch(err => console.log(err));
  };

  searchWeekly = query => {

    API.searchWeekly(query)
    .then(
      // res => this.setState({ result: res.data })
      res => {
        const data = res.data;
        let timeSeries = data["Weekly Time Series"];
        let timeSeriesDate = Object.keys(timeSeries);
        for(let i = 0; i < timeSeriesDate.length; i++){
          let object = {
            time: 0,
            value: 0
          };
          object.time = timeSeriesDate[i];
          object.value = parseFloat(timeSeries[timeSeriesDate[i]]["4. close"]);
          weekData.push(object);
          // console.log(i);
          // console.log(timeSeriesDate[i]);
          // console.log(timeSeries[timeSeriesDate[i]]["4. close"]);
          // console.log(dayData);

        }

        // console.log(data);
        // console.log("____Meta Data_____");
        // console.log(data["Meta Data"]);
        // console.log("____Time Series____");
        // console.log(timeSeries);
        // console.log("____Single TS______");
        // console.log(timeSeries[timeSeriesDate[0]]);
        // console.log("____Value__________");
        // console.log(timeSeries[timeSeriesDate[0]]["4. close"]); 
        // console.log("____Object_________");
        // console.log(object);
        console.log("____WeekData___________");
        console.log(weekData);
        this.setState({
          chartW:  lineSeries.setData([
            ...weekData
          ])
        });
    }).catch(err => console.log(err));
  };

  searchMonthly = query => {

    API.searchMonthly(query)
    .then(
      // res => this.setState({ result: res.data })
      res => {
        const data = res.data;
        let timeSeries = data["Monthly Time Series"];
        let timeSeriesDate = Object.keys(timeSeries);
        for(let i = 0; i < timeSeriesDate.length; i++){
          let object = {
            time: 0,
            value: 0
          };
          object.time = timeSeriesDate[i];
          object.value = parseFloat(timeSeries[timeSeriesDate[i]]["4. close"]);
          monthData.push(object);
          // console.log(i);
          // console.log(timeSeriesDate[i]);
          // console.log(timeSeries[timeSeriesDate[i]]["4. close"]);
          // console.log(dayData);

        }

        // console.log("Monthly");
        // console.log(data);
        // console.log("____Meta Data_____");
        // console.log(data["Meta Data"]);
        // console.log("____Time Series____");
        // console.log(timeSeries);
        // console.log("____Value__________");
        // console.log(timeSeries[timeSeriesDate[0]]["4. close"]); 
        // console.log("____Object_________");
        // console.log(object);
        console.log("____MonthData___________");
        console.log(monthData);
        this.setState({
          chartM:  lineSeries.setData([
            ...monthData
          ])
        });
    }).catch(err => console.log(err));
  };

  multiSearch = query => {
    this.searchIntraDay(query);
    this.searchDaily(query);
    this.searchWeekly(query);
    this.searchMonthly(query);
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  
  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormIntra = event => {
    event.preventDefault();
    this.searchIntraDay(this.state.search);
  };

  handleFormDaily = event => {
    event.preventDefault();
    this.searchDaily(this.state.search);
  };

  handleFormWeekly = event => {
    event.preventDefault();
    this.searchWeekly(this.state.search);
  };

  handleFormMonthly = event => {
    event.preventDefault();
    this.searchMonthly(this.state.search);
  };

  handleFormMulti = event => {
    event.preventDefault();
    this.multiSearch(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                  chart={this.state.chart}
                />
                ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormIntra={this.handleFormIntra}
                handleFormDaily={this.handleFormDaily}
                handleFormWeekly={this.handleFormWeekly}
                handleFormMonthly={this.handleFormMonthly}
                handleFormMulti={this.handleFormMulti}
              />
            </Card>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
