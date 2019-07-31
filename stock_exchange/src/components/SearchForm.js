import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <button onClick={props.handleFormIntra} className="btn btn-primary">
          Intraday
        </button> ____
        <button onClick={props.handleFormDaily} className="btn btn-primary">
          Daily
        </button>____
        <button onClick={props.handleFormWeekly} className="btn btn-primary">
          Weekly
        </button>____
        <button onClick={props.handleFormMonthly} className="btn btn-primary">
          Monthly
        </button>____
        <button onClick={props.handleFormMulti} className="btn btn-primary">
          Multi
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
