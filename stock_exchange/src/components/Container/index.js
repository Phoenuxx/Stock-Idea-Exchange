import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Container extends Component {
searchMovies = query => {
API.search(query)
.then(res => this.setState({ result: res.data }))
.catch(err => console.log(err));
};

render() {
    return(
        <div className="container"></div>
        )
}
}

export default Container;