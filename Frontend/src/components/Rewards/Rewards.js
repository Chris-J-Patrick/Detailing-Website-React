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
import { useAuth0 } from "@auth0/auth0-react";
import "./Rewards.css";

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

        const progressValue = rewardsPoints % 100;
        const discount = Math.min(Math.floor(rewardsPoints / 100) * 10, 50);

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
  }, [isAuthenticated]);

  const renderTooltip = (discount) => (
    <Tooltip id={`tooltip-${discount}`}>{`Discount: ${discount}`}</Tooltip>
  );

  return (
    <Container
      fluid
      className="rewards-container d-flex align-items-center flex-column justify-content-center"
    >
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <Card className="text-center shadow-lg mb-4 rewards-card">
          <Card.Body>
            <Row className="mb-4">
              <Col>
                <h1 className="display-6 rewards-title">Rewards</h1>
              </Col>
              <Profile />
            </Row>
            <Row className="mb-4">
              <Col md={6}>
                <Badge bg="info" className="p-2 fs-5">
                  Your Points: {points}
                </Badge>
              </Col>
              <Col md={6}>
                <Badge bg="info" className="p-2 fs-5">
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
            <p className="mt-2 text-muted">{nextRewardText}</p>
            <Button
              variant="primary"
              size="lg"
              disabled={points < 100}
              className="mt-4"
            >
              Redeem Rewards
            </Button>
            <hr />
            <h4 className="mt-4">Rewards Tiering</h4>
            <Table striped bordered hover responsive className="mt-3">
              <thead className="table-light">
                <tr>
                  <th>Points</th>
                  <th>Discount</th>
                </tr>
              </thead>
              <tbody>
                {rewards.map((reward) => (
                  <OverlayTrigger
                    key={reward.points}
                    placement="top"
                    overlay={renderTooltip(reward.discount)}
                  >
                    <tr>
                      <td>{reward.points}</td>
                      <td>{reward.discount}</td>
                    </tr>
                  </OverlayTrigger>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Rewards;
