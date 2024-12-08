// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />}
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default Card;
