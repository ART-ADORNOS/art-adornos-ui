import React, { useState } from 'react';
import axios from '../utils/axios'; // Configuración de Axios con la URL base
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('/register/', formData);
      setMessage(response.data.message);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name: '',
      });
    } catch (err) {
      setError('Error al registrar el usuario. Por favor, verifica los datos.');
    }
  };

  return (
    <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
       <Navbar />
       <section className="text-center my-16 mx-8 flex-auto">
        <h1 className="text-5xl font-extrabold ">Registro de usuarios</h1>



        <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Nombre de usuario
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Contraseña
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirmar contraseña
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirmar contraseña"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Nombre"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Apellido"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Registrar
              </button>
            </form>
            
          </div>
        </div>
       </section>

    </div>
  );
};

export default Register;
