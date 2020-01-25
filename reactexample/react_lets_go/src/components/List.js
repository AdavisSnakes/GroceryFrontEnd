import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export const Lists = ({ lists }) => {
  const [listset, setListset] = useState("");
    return(
      <Form>
        <Form.Field>
          <Input
            placeholder="List Item"
            value={listset}
            onChange={e => setListset(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Button
            onClick={async () => {
              setListset("");
            }}>

            submit
          </Button>
        </Form.Field>
      </Form>
    );
  };
