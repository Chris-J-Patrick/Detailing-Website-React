import React from "react";
import LoginButton from "../../components/LoginButton";
import { Card, Container } from "react-bootstrap";
import RewardsTable from "./RewardsTable";

const RewardsInfo = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center flex-column justify-content-center"
      style={{ minHeight: "1vh" }}
    >
      <Card
        className="shadow-lg"
        style={{
          textAlign: "center",
          padding: "20px",
          borderRadius: "15px",
          border: "none",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          background: "#f8f9fa",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Join Our Rewards Program
          </Card.Title>
          <div
            style={{
              fontSize: "1.2rem",
              color: "#333",
            }}
            className="text-secondary mt-0"
          >
            Earn points with every dollar you spend
          </div>
          <div
            style={{
              fontSize: "1.1rem",
              marginBottom: "30px",
              color: "#333",
            }}
          >
            <RewardsTable />
          </div>
          <LoginButton />
        </Card.Body>
        <Card.Footer>
          <Card.Subtitle>
            Sign up or log in to start earning rewards today!
          </Card.Subtitle>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default RewardsInfo;
