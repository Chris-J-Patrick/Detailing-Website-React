import React from "react";
import LoginButton from "../LoginButton";
import { Card, Container } from "react-bootstrap";
import RewardsTable from "./RewardsTable";

const RewardsInfo = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center flex-column justify-content-center"
      style={{
        minHeight: "1vh",
      }}
    >
      <Card
        className="shadow-lg"
        style={{
          width: "",
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
              color: "black",
              marginBottom: "0px",
            }}
          >
            Join Our Rewards Program!
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: "#333",
            }}
            className="text-secondary mt-0"
          >
            Earn points with every dollar you spend
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "1.1rem",
              marginBottom: "30px",
              color: "#333",
            }}
          ></Card.Text>
          <RewardsTable />

          <LoginButton />
        </Card.Body>
        <Card.Subtitle className="p-1">
          Sign up or log in to start earning rewards today!
        </Card.Subtitle>
      </Card>
    </Container>
  );
};

export default RewardsInfo;
