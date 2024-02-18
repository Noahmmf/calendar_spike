import { useState } from "react";
import Calendar from "./components/Calendar";
import { Container } from "react-bootstrap";
import Form from "./components/form/Form";

function App() {

  return (
    <>
      <Container>
        <Form />
        <Calendar />
      </Container>
    </>
  );
}

export default App;
