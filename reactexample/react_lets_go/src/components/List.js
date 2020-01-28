import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export const Lists = ({ onNewList }) => {
  const [listItem, setListset] = useState("");
    return(
      <Form>
        <Form.Field>
          <Input
            placeholder="List Item"
            value={listItem}
            onChange={e => setListset(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Button
            onClick={async () => {
              let itemToAdd ={listItem}
              let response = await fetch("/add_listItem", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(itemToAdd),
              });
              setListset("");
            }}
            >

            submit
          </Button>
        </Form.Field>
      </Form>
    );
  };
