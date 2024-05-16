import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try {
                await axios.post('http://localhost:3001/',{
                    email,password
                })
        } catch (e) {
            console.log(e);
        }
    }
  return (
    <div className='login'>
        <div className="login-container">
            <form action="post">
                <div className="login-fields">
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name='' placeholder='Email'/>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                </div>
                <div className='btn'>
                    <button onClick={submit}>Login</button>
                    <p>Don't have account? <Link to="Signup">Signup</Link></p>
                </div>
                
                <div className="remember">
                    <input type="checkbox" />
                    <p>remember me</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
