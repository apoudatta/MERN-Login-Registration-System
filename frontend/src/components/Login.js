import { useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { email, password });
            localStorage.setItem('token', res.data.token);
            alert('Login successful');
        } catch (err) {
            alert('Error: ' + err.response.data.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <p>New user? <Link to='/register'>Register.</Link></p>
        </div>
    );
};

export default Login;