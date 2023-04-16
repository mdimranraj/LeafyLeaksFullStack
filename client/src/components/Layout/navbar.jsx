import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import {toast} from 'react-toastify';;
function Navbar() {

    const [auth, setAuth] = useAuth();
    function handleLogout() {
      setAuth({
        ...auth, user:null, token:''
      });
      localStorage.removeItem('auth');
      toast.success("Logged out Successfully");
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img className= "logo-img" src="https://drive.google.com/uc?export=download&id=11l-zqKjyyVmgYa5f6S8iqijAkhpAvu97" alt="logo"/>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav navbar-right-items">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/plantroom">Plant Room</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

              {
                !auth.user ? (<>
                  <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  </>) : (<>
                          <li className='nav-item dropdown'>
                  
                              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <img class="profile-blank-img" src="https://drive.google.com/uc?export=download&id=1LlZ-cNQVrnfUTFwEg5lCVuFw4OPbd7wg" alt="" srcset=""></img>{auth?.user?.name}
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li className="nav-item" style={{marginLeft:"0"}}>
                                  <Link className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user' }`}>DashBoard</Link>
                                </li>
                                <li className="nav-item" style={{marginLeft:"0"}}>
                                <Link onClick={handleLogout} className="dropdown-item" to="/login">Logout</Link>
                                </li>
                              </ul>  
                          </li>
                          
                          </>)
              }
              
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;