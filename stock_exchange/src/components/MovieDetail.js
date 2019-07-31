import React from "react";
// import { createChart } from 'lightweight-charts';

// const chart = createChart(document.body, { width: 400, height: 300 });
// const lineSeries = chart.addLineSeries();
function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3>
      <h3>Chart: {props.children}</h3>
    </div>
  );
}

export default MovieDetail;
