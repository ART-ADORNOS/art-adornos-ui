import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password_confirm: '',
    email: '',
    first_name: '',
    last_name: '',
    birth_date: '',
    phone_number: '',
  });

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({}); // Para manejar errores específicos

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: '' }); // Limpiar error del campo actual
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Validación básica en el cliente
    if (formData.password !== formData.password_confirm) {
      setErrors({ ...errors, password_confirm: 'Las contraseñas no coinciden' });
      return;
    }

    axios
      .post('http://127.0.0.1:8000/api/register/', formData)
      .then((response) => {
        setMessage(response.data.message);
        setFormData({
          username: '',
          password: '',
          password_confirm: '',
          email: '',
          first_name: '',
          last_name: '',
          birth_date: '',
          phone_number: '',
        });
        setErrors({});
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrors(error.response.data); // Mostrar errores específicos de la API
        } else {
          setMessage('Error al registrar el usuario.');
        }
      });
  };

  return (
    <div className="bg-zinc-100 dark:bg-gray-900 min-h-screen flex items-center justify-center text-gray-900 dark:text-white">
  <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
    <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">Registrar Usuario</h2>
    {message && (
      <p className="text-green-500 text-center font-semibold mb-4">{message}</p>
    )}
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Nombre de Usuario
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nombre de Usuario"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="password_confirm" className="block text-sm font-medium mb-1">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="password_confirm"
          name="password_confirm"
          placeholder="Confirmar Contraseña"
          value={formData.password_confirm}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.password_confirm && (
          <p className="text-red-500 text-sm mt-1">{errors.password_confirm}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="first_name" className="block text-sm font-medium mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Nombre"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
      </div>
      <div>
        <label htmlFor="last_name" className="block text-sm font-medium mb-1">
          Apellido
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Apellido"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
      </div>
      <div>
        <label htmlFor="birth_date" className="block text-sm font-medium mb-1">
          Fecha de Nacimiento
        </label>
        <input
          type="date"
          id="birth_date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.birth_date && <p className="text-red-500 text-sm mt-1">{errors.birth_date}</p>}
      </div>
      <div>
        <label htmlFor="phone_number" className="block text-sm font-medium mb-1">
          Teléfono
        </label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="Teléfono"
          value={formData.phone_number}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
      >
        Registrar
      </button>
    </form>
  </section>
</div>

  );
};

export default RegisterUser;
