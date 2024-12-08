// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
