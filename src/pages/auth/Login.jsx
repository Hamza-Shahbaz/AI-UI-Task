import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser.jsx';

export const Login = () => {
    const [username, setUsername] = useState('Steve');
    const [password, setPassword] = useState('12345678');
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{maxWidth:"300px"}}
                    className='m-2'
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{maxWidth:"300px"}}
                    className='m-2'
                />
                <button type="submit" style={{maxWidth:"300px"}} className='m-2'>Login</button>
            </form>
            <button className='m-2 btn btn-category' onClick={(e) => navigate("/evaluation")}>Usability Evaluation</button>
        </div>
    )
}