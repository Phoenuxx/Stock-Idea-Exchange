import React, { Component } from "react";
// import Row from "../components/Row";
// import Col from '../components/Col';
// import Container from '../components/Container';
import { GoogleLogin } from 'react-google-login';
 

class Login extends Component {

    render() {
        const responseGoogle = (response) => {
            console.log(response);
            console.log(response.profileObj);
            console.log(response.profileObj.googleId);
            console.log(response.profileObj.name);
          }
          
        return (
            <GoogleLogin
                clientId="538074270661-hpd1f2m486cbm2jomvfr3vurqhqkmelr.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        );
    }
}

export default Login;