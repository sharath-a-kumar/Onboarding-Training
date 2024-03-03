// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Button from '../Components/Button.js';

// describe('Button component', () => {
//   it('renders default state correctly', () => {
//     const { getByText } = render(<Button label="Click me" />);
//     expect(getByText('Click me')).toBeInTheDocument();
//     expect(getByText('Click me')).not.toBeDisabled();
//   });

//   it('handles click events', () => {
//     const onClickMock = jest.fn();
//     const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
//     fireEvent.click(getByText('Click me'));
//     expect(onClickMock).toHaveBeenCalled();
//   });
//   it('renders loading state correctly', () => {
//     const { getByText } = render(<Button label="Click me" isLoading />);
//     expect(getByText('Loading...')).toBeInTheDocument();
//     expect(getByText('Loading...')).toBeDisabled();
//   });

//   it('renders disabled state correctly', () => {
//     const { getByText } = render(<Button label="Click me" disabled />);
//     expect(getByText('Click me')).toBeDisabled();
//   });
// });
