import React from "react";

function ListItem(props) {
  return (
    <div className="card text-center">
        <h2>{props.name}</h2>
    </div>
  );
}

export default ListItem;
