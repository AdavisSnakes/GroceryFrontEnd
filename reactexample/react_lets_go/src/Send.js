import React, {useEffect, useState} from 'react';
import './App.css';
import { Lists } from "./components/List";
import { ListItem } from "./components/item";
import { Container } from "semantic-ui-react";

function App() {
  const [listItem, setList] = useState([]);

  useEffect(() => {
    fetch("/returnItems").then(response =>
      response.json().then(data => {
        let jsonobj=JSON.stringify(data.itemlist);
        setList(jsonobj);
        console.log(data);
        console.log(data.itemlist);
        console.log(listItem);
        console.log(jsonobj);
      })
    );
  }, []);

//<ListItem itemtest={listItem}/>

  return (
    <Container style={{ marginTop: 40 }}>
      <Lists listTest={listItem}/>
    </Container>
  );
}

export default Send;
