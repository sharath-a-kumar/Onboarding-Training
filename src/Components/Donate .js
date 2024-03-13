import React, { useState } from 'react';
import '../Styles/Donate.css';

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorMessage, setDonorMessage] = useState('');

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleDonateClick = () => {
    console.log(`Donating $${donationAmount}`);
    console.log(`Donor Name: ${donorName}`);
    console.log(`Donor Email: ${donorEmail}`);
    console.log(`Donor Message: ${donorMessage}`);
  };

  return (
    <div className="donate-container">
      <h2 className="donate-heading">Donate to Support Pet Adoption</h2>
      <p className="donate-description">
        Your contribution makes a difference in the lives of pets waiting for their forever homes.
      </p>

      <form>
        <label htmlFor="donationAmount">Enter Donation Amount:</label>
        <input
          type="number"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => handleInputChange(e, setDonationAmount)}
        />

        <label htmlFor="donorName">Donor Name:</label>
        <input
          type="text"
          id="donorName"
          value={donorName}
          onChange={(e) => handleInputChange(e, setDonorName)}
        />

        <label htmlFor="donorEmail">Donor Email:</label>
        <input
          type="email"
          id="donorEmail"
          value={donorEmail}
          onChange={(e) => handleInputChange(e, setDonorEmail)}
        />

        <label htmlFor="donorMessage">Leave a Message:</label>
        <textarea
          id="donorMessage"
          rows={3}
          value={donorMessage}
          onChange={(e) => handleInputChange(e, setDonorMessage)}
        />

        <button type="button" onClick={handleDonateClick}>
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonatePage;
