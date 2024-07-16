import React from "react";
import LoginButton from "../LoginButton";
import { Card, Button, Container } from "react-bootstrap";

const RewardsInfo = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center flex-column justify-content-center p-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4f83cc, #6baed6)",
      }}
    >
      <Card
        className="shadow-sm"
        style={{
          width: "28rem",
          textAlign: "center",
          padding: "30px",
          borderRadius: "10px",
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          background: "#fff",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Join Our Rewards Program!
          </Card.Title>
          <Card.Text style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Earn points with every dollar you spend:
          </Card.Text>
          <ul
            style={{ listStyleType: "none", padding: 0, marginBottom: "20px" }}
          >
            <li style={{ fontSize: "1rem", marginBottom: "10px" }}>
              1 point per dollar spent
            </li>
            <li style={{ fontSize: "1rem", marginBottom: "10px" }}>
              100 points = 10% off
            </li>
            <li style={{ fontSize: "1rem", marginBottom: "10px" }}>
              200 points = 20% off
            </li>
            <li style={{ fontSize: "1rem", marginBottom: "10px" }}>
              300 points = 30% off
            </li>
            <li style={{ fontSize: "1rem", marginBottom: "10px" }}>
              400 points = 40% off
            </li>
            <li style={{ fontSize: "1rem", marginBottom: "10px" }}>
              500 points = 50% off
            </li>
          </ul>
          <Card.Text style={{ fontSize: "1rem", marginBottom: "20px" }}>
            Sign up or log in to start earning rewards today!
          </Card.Text>
          <LoginButton />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RewardsInfo;
