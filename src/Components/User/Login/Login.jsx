import React, { useState } from 'react';
import './Login.css'; // Importing CSS file for styling

const Login = () => {
    // State to store input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement your logic for handling login
        console.log("Username:", username);
        console.log("Password:", password);
        // Reset form fields after submission
        setUsername('');
        setPassword('');
    }

    return (
        <div id='outer'>
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit"id='login'>Login</button>
            </form>
        </div>
        </div>
    );
}

export default Login;
