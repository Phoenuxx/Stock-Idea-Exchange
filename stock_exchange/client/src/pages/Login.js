import React from "react";
// import Row from "../components/Row";
// import Col from '../components/Col';
import Container from '../components/Container';
import Login from "../components/Login";
import { GoogleLogout } from 'react-google-login';
// import Logout from '../components/Logout';
function LoginPage() {
    
    return (
        <Container>
            <h1>Welcome to Stock Exchange!</h1>
            <Login />

            {/* <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout> */}
            </Container>

    );
}

export default LoginPage;
