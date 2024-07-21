import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()} className="my-2">
        Log In | Sign Up
      </Button>
    )
  );
};

export default LoginButton;
