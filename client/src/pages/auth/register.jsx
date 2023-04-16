import React, { useState } from 'react'
import {toast} from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Register = () => {
  const [name,setName]  = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState(""); 
  const [confirmPassword,setConfirmPassword] = useState("");
  const [answer,setAnswer] = useState(""); 
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const res = await axios.post(
            "/api/v1/auth/register",
            {name,email,password,answer});
        if(res.data.success){
            toast.success(res.data.message)
            navigate('/login');
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
           Join us. Be a Leaf.
        </h3>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="nameInput" required />
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="emailInput" aria-describedby="emailHelp" required />
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="passwordInput" placeholder='For ex : abdj@123CD' required/>
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" id="passwordConfirmInput" placeholder='mention same password as above' required/>
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputAnswer" className="form-label">Security Question</label>
            <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="answerInput" placeholder="What is your Favorite Sport ?" required />
        </div>
        
        <button type="submit" className="btn btn-success">Register</button>
        
       </form>
       </Layout>
    </>
  )
}

export default Register;