import { useState } from "react";
export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(e){
        e.preventDefault();
        const response = await fetch('https://blog-application-lemon-seven.vercel.app/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}

        });
        if (response.status === 200){
            alert('Registration successful');
            setUsername('');
            setPassword('');
            
        } else {
            alert('Registration failed');
        }
        }
       
        

    
    
    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" 
            placeholder="Username" 
            value={username}
            onChange={e => setUsername(e.target.value) } />
            <input  type="password" 
            placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value) }/>
            <button >Register </button>
        </form>
    );
}