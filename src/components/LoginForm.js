import React from "react";
import { Button, Card, Form, Input } from "./form";

const LoginForm = () => {
  return (
    <Card>
      <Form>
        <label>
          Name
          <Input type='email' />
        </label>
        <label>
          Password
          <Input type='password' />
        </label>
        <Button type='submit'>Login</Button>
      </Form>
    </Card>
  );
};
export default LoginForm;
