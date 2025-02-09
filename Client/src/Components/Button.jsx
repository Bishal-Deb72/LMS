// src/components/Button.jsx
import React from 'react';

const Button = ({ children, className, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 text-lg rounded-md transition duration-300 ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
