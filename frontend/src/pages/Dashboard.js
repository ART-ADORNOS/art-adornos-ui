import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
      <Navbar/>
      <h1>Bienvenido, {user?.username || 'Usuario'}</h1>
      <button
          className="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          onClick={() => logout('/login')} // Redirige a /login tras el logout
        >
          Cerrar Sesión
        </button>
    </div>
  );
};

export default Dashboard;
