import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="welcomeContainer">
            <h1>Bem-vindo à Loja de Jogos</h1>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Registrar</button>
        </div>
    );
};

export default Welcome;