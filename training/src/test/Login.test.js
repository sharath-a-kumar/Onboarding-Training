import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Components/Login';

describe('Login component', () => {
  it('handles form submission and validation', () => {
    const { getByText, getByLabelText } = render(<Login />);

    // Attempt to submit the form without filling in username and password
    fireEvent.submit(getByText('Login'));

    // Check if error message is displayed
    expect(getByText('Username and password are required.')).toBeInTheDocument();

    // Fill in the username and password
    fireEvent.change(getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'testpassword' } });

    // Attempt to submit the form again
    fireEvent.submit(getByText('Login'));

    // Check that the error message is no longer present
    expect(queryByText('Username and password are required.')).toBeNull();

    // You can add more assertions based on the expected behavior of your component
    // For example, you might want to check if the handleSubmit function logs the correct values

    // Note: You may need to adjust the actual text content or the structure based on your actual component and styles
  });
});
