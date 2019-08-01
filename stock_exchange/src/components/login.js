import React from "react";

function Login(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="username"
          type="text"
          className="form-control"
          placeholder="email"
          id="username"
        />
         <input
          onChange={props.handleInputChange}
          value={props.value}
          name="username"
          type="text"
          className="form-control"
          placeholder="Password"
          id="password"
        />
        <br />
        <button onClick={props.handleFormMulti} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Login;
