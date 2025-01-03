import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { useState,useContext } from "react";
export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(e){
        e.preventDefault();
        const response = await fetch('https://blog-application-lemon-seven.vercel.app/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
           
        } else {
            alert('Login failed');
        }
    
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value) }/>
            <input type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value) } />
            <button >Login</button>
        </form>
    );
}