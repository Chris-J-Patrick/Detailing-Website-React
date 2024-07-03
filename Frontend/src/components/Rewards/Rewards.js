import React from "react";
import {
  Card,
  Table,
  Button,
  ProgressBar,
  Badge,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaGift } from "react-icons/fa";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";

const mockUser = {
  points: 250,
};

const Rewards = () => {
  const { points } = mockUser;
  const rewards = [
    { points: 100, discount: "10% off" },
    { points: 200, discount: "20% off" },
    { points: 300, discount: "30% off" },
    { points: 400, discount: "40% off" },
    { points: 500, discount: "50% off" },
  ];

  const currentDiscount =
    rewards.find((reward) => points >= reward.points)?.discount ||
    "No discount yet";
  const nextReward = rewards.find((reward) => points < reward.points);
  const progress = nextReward
    ? (points / nextReward.points) * 100
    : points === 0
    ? 0
    : 100;
  const nextRewardText = nextReward
    ? `${nextReward.points - points} points to ${nextReward.discount}`
    : points === 0
    ? "Start earning points to get discounts!"
    : "Maximum discount reached";

  const renderTooltip = (discount) => <Tooltip>{discount}</Tooltip>;

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "85dvh",
        background: "linear-gradient(to right, #4f83cc, #6baed6)",
        padding: "0rem",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Container className="text-center">
        <Profile />
        <LoginButton />
        <LogoutButton />
      </Container>

      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          textShadow: "2px 2px #333",
        }}
      ></h1>
    </Container>
    /*
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #4f83cc, #6baed6)",
        padding: "2rem",
        color: "#333",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Card
        className="shadow-lg"
        style={{
          borderRadius: "15px",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          border: "1px solid #d1e3ff",
        }}
      >
        <Card.Body>
          <Row className="text-center mb-4">
            <Col>
              <Card.Title
                className="display-5"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  color: "#4f83cc",
                }}
              >
                Rewards Program{" "}
                <FaGift style={{ marginLeft: "10px", color: "#6baed6" }} />
              </Card.Title>
            </Col>
          </Row>
          <Row className="text-center mb-4">
            <Col md={6} className="mb-3">
              <h5>
                <Badge
                  bg="info"
                  className="p-2"
                  style={{
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    borderRadius: "8px",
                  }}
                >
                  Your Points: {points}
                </Badge>
              </h5>
            </Col>
            <Col md={6} className="mb-3">
              <h5>
                <Badge
                  bg="info"
                  className="p-2"
                  style={{
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    borderRadius: "8px",
                  }}
                >
                  Current Discount: {currentDiscount}
                </Badge>
              </h5>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <ProgressBar
                now={progress}
                label={`${Math.round(progress)}%`}
                animated
                variant="info"
                style={{
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#e9ecef",
                }}
              />
              <p
                className="text-center mt-2"
                style={{ fontSize: "1rem", color: "#666" }}
              >
                {nextRewardText}
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-4">
            <Col md={4} className="text-center">
              <Button
                variant="primary"
                size="lg"
                disabled={points < 100}
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#4f83cc",
                  borderColor: "#4f83cc",
                }}
              >
                Redeem Rewards
              </Button>
            </Col>
          </Row>
          <hr style={{ borderTop: "1px solid #d1e3ff" }} />
          <Card.Text className="text-center mt-4">
            <strong
              className="h4"
              style={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              }}
            >
              Rewards Tiering
            </strong>
          </Card.Text>
          <Table
            striped
            bordered
            hover
            responsive
            className="mt-3"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#f8f9fa",
              color: "#333",
            }}
          >
            <thead
              className="table-light"
              style={{
                fontSize: "1rem",
                backgroundColor: "#d1e3ff",
                borderColor: "#dee2e6",
              }}
            >
              <tr>
                <th style={{ textAlign: "center" }}>Points</th>
                <th style={{ textAlign: "center" }}>Discount</th>
              </tr>
            </thead>
            <tbody>
              {rewards.map((reward) => (
                <tr
                  key={reward.points}
                  style={{ textAlign: "center", fontSize: "1rem" }}
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip(reward.discount)}
                  >
                    <td>{reward.points}</td>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip(reward.discount)}
                  >
                    <td>{reward.discount}</td>
                  </OverlayTrigger>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
    */
  );
};

export default Rewards;
