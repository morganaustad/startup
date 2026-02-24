import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';

export function Login({ setUser }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const isFormValid = username.trim() !== '' && password.trim() !== '';

    function handleSubmit(e) {
        // e.preventDefault();

        if (!isFormValid) {
            alert('Please enter both username and password.');
            return;
        };

        localStorage.setItem('user', username);
        localStorage.setItem('password', password);

        navigate('/features');
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <main className="justify-content-center align-items-center">
            <h2 className="text-center">Welcome to <span>FeatureReacher</span></h2>
            <form className="px-4 py-3 border" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="mb-4">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button className="btn btn-info text-light" type="submit" >Login</button>
            </form>
        </main>
    );
}