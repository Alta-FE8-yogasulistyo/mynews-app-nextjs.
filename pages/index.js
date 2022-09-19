import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

const Index = () => {
  const [name, setName] = useState("");

  // Go PageHome
  const goHome = () => {
    Router.push({
      pathname: "/dashboard/homepage",
      query: {
        name: name,
      },
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
      <div>
        <p className="hi">Hi, THERE!!</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Input Your Name</Form.Label>
            <Form.Control type="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Form.Text className="text-muted">Every day for NEWS!</Form.Text>
          </Form.Group>
        </Form>
        <Button onClick={() => goHome()} className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Index;
