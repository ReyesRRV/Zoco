import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sideBar';
import UserProfileForm from '../components/userForm';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [userData, setUserData] = useState({
    name: 'Juan Pérez',
    email: 'user@zoco.com',
    address: 'Av. Siempre Viva 123',
    phone: '123456789',
    studies: 'Ingeniería Informática',
    experience: '3 años en desarrollo web',
  });

  // Simulamos el rol del usuario (puedes cambiarlo a 'user' para un usuario común)
  const [userRole, setUserRole] = useState('admin'); // 'admin' o 'user'

  useEffect(() => {
    // Simulamos cantidad de usuarios
    setUserCount(7);
  }, []);

  const handleUpdate = (updatedData) => {
    console.log('Datos actualizados:', updatedData);
    setUserData(updatedData);
    alert('Datos guardados correctamente');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 space-y-6">
        {userRole === 'admin' && (
          <>
            <h1 className="text-2xl font-bold">Panel de Administración</h1>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center justify-center h-32 w-full md:w-64">
                  <h2 className="text-lg font-semibold mb-2">Cantidad de Usuarios</h2>
                  <p className="text-3xl font-bold text-blue-600">{userCount}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <UserProfileForm userData={userData} onUpdate={handleUpdate} />
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
