import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

const ForgotPassword = () => {

  const [answer,setAnswer] = useState("");
  const [email,setEmail] = useState("");
  const [newPassword,setNewPassword] = useState("");

  const navigate = useNavigate("");

  //form function
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const res = await axios.post(
            "/api/v1/auth/forgot-password",
            {email,newPassword,answer});
        if(res && res.data.success){
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
    <Layout>
            <form onSubmit={handleSubmit} className='auth-form'> 
       <h3>
           Reset Password
        </h3>

        <div className="each-form mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" id="emailInput" aria-describedby="emailHelp" required/>
        </div>
        
        <div className="each-form mb-3">
            <label htmlFor="exampleInputAnswer" className="form-label">Security answer</label>
            <input type="text" onChange={(e)=>setAnswer(e.target.value)} value={answer} className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder='What is your favorite sport ?' required/>
        </div>

        <div className="each-form mb-3">
            <label htmlFor="exampleInputNewPassword1" className="form-label">New Password</label>
            <input type="password" onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} className="form-control" id="newPasswordInput" required />
        </div>

        <button type="submit" className="btn btn-success">Reset</button>
        

        <div>Not Registered...?</div>
       </form>
    </Layout>
    
  )
}

export default ForgotPassword