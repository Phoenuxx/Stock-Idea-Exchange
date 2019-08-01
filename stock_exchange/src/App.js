import React from "react";
import GraphContainer from "./components/GraphContainer";
import Container from "./components/Container";
import Row from "./components/Row";
import UserBlock from "./components/UserBlock";
function App() {
  return (
  <Container>
    <Row>
      <GraphContainer />
      <UserBlock />
    </Row>
  </Container>);
}

export default App;
