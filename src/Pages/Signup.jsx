import React from 'react'
import './Signup.css'

const Login = () => {
    const [firstname,setFirstname] = useState('');
    const [lastname,setladtname] = useState('');
    const [email,setemail] = useState('');
    const [password,setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try {
                await axios.post('http://localhost:3001/',{
                    firstname,lastname,email,password
                })
        } catch (e) {
            console.log(e);
        }
    }
  return (
    <div className='login'>
        
        <div className="login-container">
            
            <div className="login-fields">
                <input type="text" onChange={(e)=>{setFirstname(e.target.value)}} placeholder='First Name'/>
                <input type="text" onChange={(e)=>{setladtname(e.target.value)}} placeholder='Last Name'/>
                <input type="text" onChange={(e)=>{setemail(e.target.value)}} placeholder='Email'/>
                <input type="password" placeholder='Password'/>
            </div>
            <button>Enroll</button>
        </div>
    </div>
  )
}

export default Login
