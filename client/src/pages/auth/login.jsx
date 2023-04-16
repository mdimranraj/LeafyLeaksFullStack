import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../context/auth';

const Login = () => {

    const [auth,setAuth] = useAuth();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate("");
  const location = useLocation();
  //form function
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const res = await axios.post(
            "/api/v1/auth/login",
            {email,password});
        if(res && res.data.success){
            toast.success(res.data.message)
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token
            });
            localStorage.setItem('auth', JSON.stringify(res.data));
            navigate(location.state || '/');
        }
        else{
            toast.error(res.data.message);
        }    
    }
    catch(error){
        console.log(error);
        toast.error("Something went wrong");
    }
  }


  return (
    <>
       <Layout>
       <form onSubmit={handleSubmit} className='auth-form'> 
       <h3>
           Login to your Leaf
        </h3>

        <div className="each-form mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" id="emailInput" aria-describedby="emailHelp" required/>
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" id="passwordInput" required />
        </div>

        <button type="submit" className="btn btn-success">Log In</button>
        
        <div className='mt-3'>
        <button type="submit" className="btn btn-success" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
        </div>
        
        

        <div>Not Registered...?</div>
       </form>
       </Layout>
    </>
  )
}

export default Login