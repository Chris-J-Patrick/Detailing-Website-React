import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Spinner, Container } from "react-bootstrap";

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
    <Container>
      <Card
        style={{
          width: "18rem",
          textAlign: "center",
          border: "none",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Container>
          <Card.Img
            fluid
            variant="top"
            src={user.picture}
            alt={user.name}
            style={{
              alignItems: "center",
              width: "100%",
              height: "auto",
              borderRadius: "50%",
              border: "5px solid white",
            }}
          />{" "}
        </Container>

        <Card.Body>
          <Card.Title style={{ margin: 0 }}>{user.name}</Card.Title>
          <Card.Text style={{ color: "gray" }}>{user.email}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
