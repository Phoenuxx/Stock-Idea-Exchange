import React from "react";

function Login(props) {
  return (
    <form>
      <div className="form-group">
        <br />
        <a href="/auth/google" className="btn btn-success">
          Login
        </a>
      </div>
    </form>
  );
}

export default Login;
