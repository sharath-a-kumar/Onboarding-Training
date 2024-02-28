import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Styles/Donate.css'
const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorMessage, setDonorMessage] = useState('');

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonorNameChange = (e) => {
    setDonorName(e.target.value);
  };

  const handleDonorEmailChange = (e) => {
    setDonorEmail(e.target.value);
  };

  const handleDonorMessageChange = (e) => {
    setDonorMessage(e.target.value);
  };

  const handleDonateClick = () => {
    // Add your donation and donor details logic here
    console.log(`Donating $${donationAmount}`);
    console.log(`Donor Name: ${donorName}`);
    console.log(`Donor Email: ${donorEmail}`);
    console.log(`Donor Message: ${donorMessage}`);

  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <div className="container">
              <h2 className="text-center">Donate to Support Pet Adoption</h2>
              <p className="text-center">
                Your contribution makes a difference in the lives of pets waiting for their forever homes.
              </p>

              <Form>
                <Form.Group controlId="donationAmount">
                  <Form.Label>Enter Donation Amount:</Form.Label>
                  <Form.Control
                    type="number"
                    value={donationAmount}
                    onChange={handleDonationChange}
                  />
                </Form.Group>

                <Form.Group controlId="donorName">
                  <Form.Label>Donor Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={donorName}
                    onChange={handleDonorNameChange}
                  />
                </Form.Group>

                <Form.Group controlId="donorEmail">
                  <Form.Label>Donor Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={donorEmail}
                    onChange={handleDonorEmailChange}
                  />
                </Form.Group>

                <Form.Group controlId="donorMessage">
                  <Form.Label>Leave a Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={donorMessage}
                    onChange={handleDonorMessageChange}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleDonateClick}>
                  Donate
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DonatePage;
