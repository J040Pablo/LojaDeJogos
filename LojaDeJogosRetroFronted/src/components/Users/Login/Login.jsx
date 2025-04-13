import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../services/api';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', formData);
            setMessage(response.data.message);
            localStorage.setItem('token', response.data.token);

            if (response.data.message === 'Login bem-sucedido') {
                navigate('/games'); // Redireciona para a página de Games
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Erro ao fazer login');
        }
    };

    return (
        <div className="loginContainer">
            <h1 className="loginTitle">Login</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="loginInput"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="loginInput"
                    onChange={handleChange}
                />
                <button type="submit" className="loginButton">Entrar</button>
            </form>
            <button className="loginLink" onClick={() => navigate('/register')}>
                Não possui conta?
            </button>
            <p>{message}</p>
        </div>
    );
};

export default Login;