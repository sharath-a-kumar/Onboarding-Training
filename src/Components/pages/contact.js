// ContactUs.js

import React, { useState } from "react";

const ContactUs = () => {
  // State for storing feedback
  const [feedback, setFeedback] = useState("");

  // Function to handle feedback submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the feedback to your server or perform any other actions
    console.log("Feedback submitted:", feedback);
    // Reset the feedback state after submission
    setFeedback("");
  };

  return (
    <div className="container">
      <style>
        {`
          h1 {
            color: #333;
          }

          p {
            color: #555;
          }s  

          .contact-info {
            margin-bottom: 20px;
          }

          .contact-item {
            margin-bottom: 10px;
            color: #666;
          }

          form {
            margin-top: 20px;
          }

          textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            resize: vertical;
          }

          button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }
         
        `}
      </style>

      <h1>Contact Us</h1>
      <p>
        If you have any questions or concerns, feel free to contact us using the
        details below:
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong> info@tailwaggingadoptions.com
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> +91 7411516558
        </div>
      </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit}>
        <h2>Give us your feedback</h2>
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default ContactUs;
