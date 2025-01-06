import axios from 'axios';

// Configurar Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/accounts', // Base de las rutas de 'accounts'
  headers: {
    'Content-Type': 'application/json',
  },
});

// Enviar datos al endpoint de registro
const handleRegister = async (formData) => {
  try {
    const response = await api.post('/register/', formData);
    console.log('Usuario registrado:', response.data);
  } catch (error) {
    console.error('Error en el registro:', error.response.data);
  }
};


export default api;