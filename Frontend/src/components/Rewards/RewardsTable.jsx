import React from "react";
import {
  Card,
  Table,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./Rewards.css";

const RewardsTable = () => {
  const rewardTiers = [
    { points: 100, discount: "10%" },
    { points: 200, discount: "20%" },
    { points: 300, discount: "30%" },
    { points: 400, discount: "40%" },
    { points: 500, discount: "50%" },
  ];

  return (
    <Container className="mt-3">
      <Card className="shadow-sm bg-white rounded">
        <Card.Header className="text-center bg-primary text-white mb-0">
          <h5>Rewards Tiering</h5>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive className="text-center m-0">
            <thead>
              <tr className="bg-light">
                <th>Points</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {rewardTiers.map((reward) => (
                <tr key={reward.points}>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>{`Earn ${reward.points} points for a ${reward.discount} discount!`}</Tooltip>
                    }
                  >
                    <td>{reward.points}</td>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>{`Get ${reward.discount} off on our services!`}</Tooltip>
                    }
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
  );
};

export default RewardsTable;
