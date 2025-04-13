import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../services/api';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Erro ao registrar');
        }
    };

    return (
        <div className="registerContainer">
            <h1 className="registerTitle">Registrar</h1>
            <form onSubmit={handleSubmit} className="registerForm">
                <input
                    type="text"
                    name="username"
                    placeholder="Nome de usuário"
                    onChange={handleChange}
                    className="registerInput"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    className="registerInput"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={handleChange}
                    className="registerInput"
                />
                <button type="submit" className="registerButton">Registrar</button>
            </form>
            <p className="registerMessage">{message}</p>
            <button className="registerLink" onClick={() => navigate('/Login')}>
                Já possui conta?
            </button>
        </div>
    );
};

export default Register;