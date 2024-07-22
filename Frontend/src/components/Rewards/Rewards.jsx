import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  ProgressBar,
  Badge,
  Container,
  Row,
  Col,
  Tooltip,
} from "react-bootstrap";

import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";
import RewardsInfo from "./RewardsInfo";
import "./Rewards.css";
import RewardsTable from "./RewardsTable";

const Rewards = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [points, setPoints] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentDiscount, setCurrentDiscount] = useState(0);
  const [nextRewardText, setNextRewardText] = useState("");

  useEffect(() => {
    const fetchRewards = async () => {
      if (isAuthenticated) {
        const rewardsPoints = 123;
        setPoints(rewardsPoints);

        const progressValue = rewardsPoints % 100;
        const discount = Math.min(Math.floor(rewardsPoints / 100) * 10, 50);

        setProgress(progressValue);
        setCurrentDiscount(discount);
        setNextRewardText(
          `You need ${100 - progressValue} more points for the next discount.`
        );
      }
    };

    fetchRewards();
  }, [isAuthenticated]);

  return (
    <Container className="rewards-container d-flex align-items-center flex-column justify-content-center">
      {!isAuthenticated ? (
        <RewardsInfo />
      ) : (
        <Card className="text-center shadow-lg mb-1 rewards-card">
          <Card.Body>
            <Row className="mb-2">
              <Col>
                <h1 className="display-6 rewards-title">Rewards</h1>
              </Col>
              <Profile />
            </Row>
            <Row className="mb-2">
              <Col md={6}>
                <Badge bg="info" className="p-1 fs-5">
                  Your Points: {points}
                </Badge>
              </Col>
              <Col md={6}>
                <Badge bg="info" className="p-1 fs-5">
                  Current Discount: {currentDiscount}%
                </Badge>
              </Col>
            </Row>
            <ProgressBar
              now={progress}
              label={`${progress}%`}
              animated
              variant="info"
              className="rewards-progress"
            />
            <p className="mt-1 text-muted">{nextRewardText}</p>
            <Button
              variant="primary"
              size="lg"
              disabled={points < 100}
              className="mt-1"
            >
              Redeem Rewards
            </Button>
            <RewardsTable />
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Rewards;
