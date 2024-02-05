// Components/AdoptionForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/PetAdoptionForm.css'; // Import the AdoptionForm.css stylesheet

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    adoptionDate: null, // Add a new field for the adoption date
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      adoptionDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle the form submission, such as sending the data to a server or displaying a confirmation message.
    console.log('Form submitted:', formData);
  };

  return (
    <div className="adoption-form-container">
      <h2>Adoption Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="adoptionDate">Preferred Adoption Date:</label>
        <DatePicker
          id="adoptionDate"
          name="adoptionDate"
          selected={formData.adoptionDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy" // Set the date format to DD-MM-YYYY
          placeholderText="Click to select a date"
          isClearable
          required
        />

        <button type="submit">Submit Adoption Request</button>
      </form>
    </div>
  );
};

export default AdoptionForm;
