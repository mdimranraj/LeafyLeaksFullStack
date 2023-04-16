import React from 'react';
import {Link, Outlet } from "react-router-dom";

function Footer() {

    return (
        
      <div className='footer-site'>
        
        <hr />
        <div className="container">
          <div className="foot1">
            <h4>About Us</h4>
            LeafyLeaks LLP
            <br />
            Phagwara LPU,144411
          </div>
          <div className="foot2">
            <h4>Important Links</h4>
            <a href="/plantroom/ayurvedic">Agriculture Plants</a> <br />
            <a href='/plantroom/blogs'>Blogs</a> <br/>
            <a href='/aboutus'>About Us</a> 
          </div>
          <div className="foot3">
            {/* <h4>Green Team</h4> */}
            <h4>Site Admin</h4>
            Md Imran Raj  <a href="https://www.linkedin.com/in/md-imran-raj-952659201/" target='_blank'><img className='linkedIn-img' src='https://drive.google.com/uc?export=download&id=1fW7AugDk_OyfBbZYpes7wnhbLM-5Xdr5'></img></a> <br />
            {/* Ankush Kumar  <a href="https://www.linkedin.com/in/ankush-kumar-b76335189/" target='_blank'><img className='linkedIn-img' src='https://drive.google.com/uc?export=download&id=1fW7AugDk_OyfBbZYpes7wnhbLM-5Xdr5'></img></a> <br />
            Jigyanshu Raj <a href="https://www.linkedin.com/in/hashjiggy/" target='_blank'><img className='linkedIn-img' src='https://drive.google.com/uc?export=download&id=1fW7AugDk_OyfBbZYpes7wnhbLM-5Xdr5'></img></a> <br /> */}
            <div style={{fontSize:"1rem"}}>(Full Stack Web Developer)</div>
            <div style={{fontSize:"1rem"}}>(UI/UX Developer)</div>
          </div>
        </div>
        <div className='imageLogo'>
        < img src="https://drive.google.com/uc?export=download&id=11l-zqKjyyVmgYa5f6S8iqijAkhpAvu97" alt="logo"/>
        </div>
      </div>
    );
}

export default Footer;