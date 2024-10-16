// src/components/Card.js
import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 sm:p-6 md:p-8 lg:p-10">
      <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
      <p className="text-2xl md:text-3xl">{value}</p>
    </div>
  );
};

export default Card;
