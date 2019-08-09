import React from "react";
// import Row from "../components/Row";
// import Col from '../components/Col';
import Container from '../components/Container';
import Login from "../components/Login";
// import Logout from '../components/Logout';
function LoginPage() {
    
    return (
        <Container>
            <h1>Welcome to Stock Exchange!</h1>
            <Login />
            <a href="./user">
            <button >Test </button></a>
            </Container>

    );
}

export default LoginPage;
