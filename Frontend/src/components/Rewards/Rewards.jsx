import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  ProgressBar,
  Badge,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";
import RewardsInfo from "./RewardsInfo";
import RewardsTable from "./RewardsTable";
import {
  checkOrCreateUser,
  getUserRewardsByEmail,
  redeemRewards,
} from "../../api";
import "./Rewards.css";

const Rewards = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [points, setPoints] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentDiscount, setCurrentDiscount] = useState(0);
  const [nextRewardText, setNextRewardText] = useState("");

  useEffect(() => {
    const initializeUser = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          const userData = {
            Auth0Id: user.sub,
            name: user.name || user.nickname || user.email,
            email: user.email,
            address: "", // Address can be added if available or needed
          };

          await checkOrCreateUser(userData);
          console.log("Initialized user:", userData.name);

          fetchRewardsData(token, user.email);
        } catch (error) {
          console.error("Error initializing user:", error);
        }
      }
    };

    initializeUser();
  }, [isAuthenticated, getAccessTokenSilently, user]);

  const fetchRewardsData = async (token, email) => {
    try {
      const rewardsData = await getUserRewardsByEmail(email);
      const rewardsPoints = rewardsData.rewardsPoints || 0;
      setPoints(rewardsPoints);

      const progressValue = rewardsPoints % 100;
      const discount = Math.min(Math.floor(rewardsPoints / 100) * 10, 50);

      setProgress(progressValue);
      setCurrentDiscount(discount);
      setNextRewardText(
        `You need ${100 - progressValue} more points for the next discount.`
      );
    } catch (error) {
      console.error("Error fetching rewards data:", error);
    }
  };

  const handleRedeemRewards = async () => {
    try {
      await redeemRewards(user.sub, points);
      fetchRewardsData(user.email);
    } catch (error) {
      console.error("Error redeeming rewards:", error);
    }
  };

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
              onClick={handleRedeemRewards}
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
