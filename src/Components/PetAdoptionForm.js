import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/PetAdoptionForm.css';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    adoptionDate: null,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      adoptionDate: date,
    });

    setErrors({
      ...errors,
      adoptionDate: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    if (!formData.adoptionDate) {
      newErrors.adoptionDate = 'Preferred Adoption Date is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3000/submitAdoptionForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const responseData = await response.json();
          setSubmittedData(responseData); // Set the submitted data
          console.log('Form submitted successfully:', responseData);
        } else {
          console.error('Failed to submit the form');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    } else {
      console.log('Form validation failed:', errors);
    }
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
        {errors.name && <div className="error-message">{errors.name}</div>}

        <label htmlFor="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
/>
{errors.email && <div className="error-message">{errors.email}</div>}

<label htmlFor="phoneNumber">Phone Number:</label>
<input
  type="tel"
  id="phoneNumber"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
  required
/>
{errors.phoneNumber && (
  <div className="error-message">{errors.phoneNumber}</div>
)}

<label htmlFor="message">Message:</label>
<textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
></textarea>
{errors.message && <div className="error-message">{errors.message}</div>}

<label htmlFor="adoptionDate">Preferred Adoption Date:</label>
<DatePicker
  id="adoptionDate"
  name="adoptionDate"
  selected={formData.adoptionDate}
  onChange={handleDateChange}
  dateFormat="dd-MM-yyyy"
  placeholderText="Click to select a date"
  isClearable
  required
/>
{errors.adoptionDate && (
  <div className="error-message">{errors.adoptionDate}</div>
)}
 <button type="submit">Submit Adoption Request</button>
      </form>
  {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
                <th>Adoption Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.email}</td>
                <td>{submittedData.phoneNumber}</td>
                <td>{submittedData.message}</td>
                <td>{submittedData.adoptionDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdoptionForm;
