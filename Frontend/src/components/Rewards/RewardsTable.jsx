import React from "react";
import {
  Card,
  Table,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const RewardsTable = () => {
  const rewardTiers = [
    { points: 100, discount: "10%" },
    { points: 200, discount: "20%" },
    { points: 300, discount: "30%" },
    { points: 400, discount: "40%" },
    { points: 500, discount: "50%" },
  ];

  return (
    <Container>
      <h4 className="mt-1">Rewards Tiering</h4>
      <Table striped bordered hover responsive className="mt-1 table-sm">
        <thead className="table-light">
          <tr>
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
                  <Tooltip id={`tooltip-${reward.points}`}>
                    {reward.discount}
                  </Tooltip>
                }
              >
                <td>{reward.points}</td>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${reward.discount}`}>
                    {reward.discount}
                  </Tooltip>
                }
              >
                <td>{reward.discount}</td>
              </OverlayTrigger>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RewardsTable;
