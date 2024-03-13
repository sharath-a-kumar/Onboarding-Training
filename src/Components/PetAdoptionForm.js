
import React, { useState } from 'react';

const PetAdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
    adoption_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/petForms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Pet Adoption Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          message: '',
          adoption_date: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Pet Adoption Form submission error:', error.message);
      alert('Failed to submit pet adoption form. Please try again.');
    }
  };

  return (
    <div className="pet-adoption-form-container">
      <h2>Pet Adoption Form</h2>
      <p>Ready to bring a new furry friend into your family? Fill out the adoption form below!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <label htmlFor="adoptionDate">Preferred Adoption Date:</label>
        <input type="date" id="adoption_date" name="adoption_date" value={formData.adoption_date} onChange={handleChange} required />

        <button type="submit" title="Click here to submit your pet adoption request">
          Submit Adoption Request
        </button>
      </form>
    </div>
  );
};

export default PetAdoptionForm;
