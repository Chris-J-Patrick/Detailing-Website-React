import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Spinner, Container } from "react-bootstrap";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Container className="">
      <Card
        style={{
          textAlign: "center",
          justifySelf: "Center",
          border: "none",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Container>
          <Card.Img
            variant="top"
            src={user.picture}
            alt={user.name}
            style={{
              alignItems: "center",
              width: "50px",
              height: "auto",
              borderRadius: "50%",
              border: "5px solid white",
            }}
          />{" "}
        </Container>

        <Card.Body>
          <Card.Title style={{ margin: 0 }}>{user.name}</Card.Title>
          <Card.Text style={{ color: "gray" }}>{user.email}</Card.Text>
          <LogoutButton />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
