import React from 'react';
import { Card } from 'react-bootstrap';
import { UserLayout } from '../layout/UserLayout';
import iPhone from '../../assets/heroimg.jpeg';

export const Dashboard = () => {
  return (
    <div>
      <UserLayout>
        <div className="d-flex justify-content-around flex-wrap">
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={iPhone} />
            <Card.Body>
              <Card.Title>iPhone 13 Pro Max</Card.Title>
              <Card.Text>$1000</Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={iPhone} />
            <Card.Body>
              <Card.Title>iPhone 13 Pro Max</Card.Title>
              <Card.Text>$1000</Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={iPhone} />
            <Card.Body>
              <Card.Title>iPhone 13 Pro Max</Card.Title>
              <Card.Text>$1000</Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={iPhone} />
            <Card.Body>
              <Card.Title>iPhone 13 Pro Max</Card.Title>
              <Card.Text>$1000</Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={iPhone} />
            <Card.Body>
              <Card.Title>iPhone 13 Pro Max</Card.Title>
              <Card.Text>$1000</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </UserLayout>
    </div>
  );
};
