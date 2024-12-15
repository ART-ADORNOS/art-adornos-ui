// src/components/RegisterForm.js
import React, { useState } from 'react';
import api from '../api';

// export const AuthContext : 

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'normal', // Valor por defecto: usuario normal
    });
    const [message, setMessage] = useState('');

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = formData.role === 'admin' ? 'register/admin/' : 'register/user/';
            const response = await api.post(endpoint, formData);
            setMessage(response.data.message || 'Registro exitoso.');
            setFormData({ username: '', email: '', password: '', role: 'normal' });
        } catch (error) {
            console.error('Error al registrar:', error.response.data);
            setMessage('Hubo un error en el registro.');
        }
    };

    return (
        <div>
            <h1>Registro de Usuario</h1>
            {message && <p>{message}</p>}
            <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

           
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label>Nombre de Usuario:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Rol:</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="normal">Comprador</option>
                        <option value="admin">Vendedor</option>
                    </select>
                </div>
                <button type="submit"className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Ingresar</button>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
                            Aun no tienes cuenta?{" "}
                            <a
                                href="#"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Registrate aqui para comenzar ✨
                            </a>
            </p>
        </div>
        </div>
        </div>
    );
};

export default RegisterForm;
