import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Users/Login/Login';
import Register from './components/Users/Register/Register';
import Home from './components/Home/Home';
import Games from './components/Home/Games/Games';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;