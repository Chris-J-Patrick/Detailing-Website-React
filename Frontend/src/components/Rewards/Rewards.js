import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Rewards = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [points, setPoints] = useState(0);
  const [progress, setProgress] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [currentDiscount, setCurrentDiscount] = useState(0);
  const [nextRewardText, setNextRewardText] = useState("");

  useEffect(() => {
    const fetchRewards = async () => {
      if (isAuthenticated) {
        const rewardsPoints = 123;
        setPoints(rewardsPoints);

        // Calculate progress and current discount based on points
        const progressValue = rewardsPoints % 100;
        const discount = Math.min(Math.floor(rewardsPoints / 100) * 10, 50); // Max discount is 50%

        setProgress(progressValue);
        setCurrentDiscount(discount);
        setNextRewardText(
          `You need ${100 - progressValue} more points for the next discount.`
        );

        const rewardTiers = [
          { points: 100, discount: "10%" },
          { points: 200, discount: "20%" },
          { points: 300, discount: "30%" },
          { points: 400, discount: "40%" },
          { points: 500, discount: "50%" },
        ];
        setRewards(rewardTiers);
      }
    };

    fetchRewards();
  }, [isAuthenticated, getAccessTokenSilently, user]);

  const renderTooltip = (discount) => (
    <Tooltip id="button-tooltip">{`Discount: ${discount}`}</Tooltip>
  );

  return (
    <Container
      fluid
      className="d-flex align-items-center flex-column justify-content-center"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(to right, #4f83cc, #6baed6)",
        padding: "2rem",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <LoginButton />

      {isAuthenticated && (
        <>
          <Card
            className="shadow-lg mb-4"
            style={{
              borderRadius: "15px",
              width: "100%",
              maxWidth: "900px",
              backgroundColor: "#ffffff",
              border: "1px solid #d1e3ff",
            }}
          >
            <Card.Body>
              <Container className="text-center mb-4">
                <Profile />
                <LogoutButton />
              </Container>
              <Row className="text-center mb-4">
                <Col>
                  <Card.Title
                    className="display-5"
                    style={{
                      fontWeight: "bold",
                      fontFamily:
                        "Helvetica Neue, Helvetica, Arial, sans-serif",
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
                      Current Discount: {currentDiscount}%
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
              <Card.Title
                className="text-center"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  color: "#4f83cc",
                }}
              >
                Your Progress
              </Card.Title>
              <ProgressBar
                now={points % 100}
                max={100}
                label={`${Math.round(((points % 100) / 100) * 100)}%`}
                animated
                variant="info"
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  backgroundColor: "#e9ecef",
                }}
              />
              <div className="d-flex justify-content-between mt-2">
                {rewards.map((reward, index) => (
                  <div key={index} style={{ textAlign: "center", flex: 1 }}>
                    <p style={{ margin: 0 }}>{reward.points} Points</p>
                    <p style={{ margin: 0 }}>{reward.discount} Discount</p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Rewards;
