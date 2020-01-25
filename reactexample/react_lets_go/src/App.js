import React, {useEffect, useState} from 'react';
import './App.css';
import { Lists } from "./components/List";
import { Container } from "semantic-ui-react";

function App() {
  const [lists, setList] = useState([]);

  useEffect(() => {
    fetch("/api_test").then(response =>
      response.json().then(data => {
        setList(data.lists);
        console.log(data);
      })
    );
  }, []);


  return (
    <Container style={{ marginTop: 40 }}>
      <Lists lists={lists} />
    </Container>
  );
}

export default App;
