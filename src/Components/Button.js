
import React from 'react';

const Button = ({ label, onClick, isLoading, disabled }) => {
  return (
    <button onClick={onClick} disabled={isLoading || disabled}>
      {isLoading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
