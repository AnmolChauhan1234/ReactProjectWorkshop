import React from 'react';
import { CarData } from './CarData';

function Car() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {CarData.map((car, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <img src={car.imageUrl} alt={car.carName} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="text-lg font-semibold">{car.carName}</h4>
            <p className="text-gray-600">{car.brand}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Car;
