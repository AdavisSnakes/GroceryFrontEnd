import React from "react";
import { List, Input, Header, Form } from "semantic-ui-react";

export const ListItem = ({ itemlist }) => {
  return(
          itemlist.map((user, index) => (
            <ListItem eventKey={index}>user.item</ListItem>
      ))
  );
};
