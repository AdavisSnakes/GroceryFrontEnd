import React, {useEffect, useState} from 'react';
import './App.css';
import { Lists } from "./components/List";
import { Container } from "semantic-ui-react";

function App() {
  const [listItem, setList] = useState([]);

  useEffect(() => {
    fetch("/returnItems").then(response =>
      response.json().then(data => {
        setList(data.listItem);
        console.log(data);
      })
    );
  }, []);


  return (
    <Container style={{ marginTop: 40 }}>
      <Lists
        listTest={listItem}
        />
    </Container>
  );
}

export default App;
