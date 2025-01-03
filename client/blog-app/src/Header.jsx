import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Link , useNavigate } from "react-router-dom";

export default function Header() {
    const {setUserInfo,userInfo} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://blog-application-lemon-seven.vercel.app/profile', {credentials: 'include'}).then( response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                
            });
        })
    }, []);
    function logout(){
        fetch('https://blog-application-lemon-seven.vercel.app/logout', 
          {credentials: 'include',
            method: 'POST',
          }).then(() => {   
            setUserInfo(null);
            navigate('/');
          });
          
    }
    const username = userInfo?.username;
    return (
        <header>
            <Link to="/" className="logo">My Blog</Link>

            <nav>
                {username && (
                    <>
                        <span>Hello, {username}</span>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
              
            </nav>
        </header>
    );
}