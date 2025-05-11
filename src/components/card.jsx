import React from 'react';
import { FaUsers } from 'react-icons/fa';

const UserCard = ({ totalUsers, isVisible }) => {
  if (!isVisible) return null; // Si no es visible, no renderiza nada

  return (
    <div className="bg-white shadow-md rounded-lg p-2 flex items-center justify-between w-full max-w-xs">
      <div>
        <h3 className="text-gray-500 text-xs">Usuarios Registrados</h3>
        <p className="text-lg font-bold text-gray-800">{totalUsers}</p>
      </div>
      <FaUsers className="text-blue-500 text-2xl" />
    </div>
  );
};

export default UserCard;
