import React from "react";

function StockList(props) {
  return (
    <div className="card text-center">
      <div className="card-body"><h4>{props.name}</h4></div>
    </div>
  );
}

export default StockList;
