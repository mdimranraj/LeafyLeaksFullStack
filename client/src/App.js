import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/home";
import Navbar from './components/Layout/navbar';
import Footer from './components/Layout/footer';
import PlantRoom from './pages/plantroom';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import MyPlants from './components/myplants';
import AboutUs from './pages/about';
import PlantDetails from './pages/plantdetails';
import Decoration from './components/plants/decoration';
import Featured from './components/plants/featured';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgotPassword';
import NotFound from './components/notfound';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import Ayurvedic from './components/plants/ayurvedic';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCatogory from './pages/Admin/CreateCatogory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import MyBlogs from './pages/user/MyBlogs';


function App() {
  let str  = "Featured";
  return (
    <>
    
      <div className="App">
      <header className="App-header">
          
          <Router>
          <main >
            <ToastContainer/>
          </main>  
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="/dashboard" element={<PrivateRoute/>}>
                <Route path="user" element={<Dashboard />} />
                <Route path="user/orders" element={<Orders />} />
                <Route path="user/profile" element={<Profile />} />
                <Route path="user/blogs" element={<MyBlogs />} />
              </Route>
              <Route path="/dashboard" element={<AdminRoute/>} >
                <Route path="admin" element={<AdminDashboard/>}/>
                <Route path="admin/create-category" element={<CreateCatogory/>}/>
                <Route path="admin/create-product" element={<CreateProduct/>}/>
                <Route path="admin/users" element={<Users/>}/>
              </Route>  
              
              <Route path='/plantroom' element={<PlantRoom currState={str}/>}>
                <Route path='decoration' element={<Decoration/>} />
                <Route path='featured' element={<Featured/>} />
                <Route path='ayurvedic' element={<Ayurvedic/>} />
                <Route path='crops' element={<NotFound/>} />
                <Route path='bonsai' element={<NotFound/>} />
                <Route path='vegetables' element={<NotFound/>} />
                <Route path='fruits' element={<NotFound/>} />
                <Route path='pulses' element={<NotFound/>} />
                <Route path='trees' element={<NotFound/>} />
                <Route path='herbs' element={<NotFound/>} />
                <Route path='climbers' element={<NotFound/>} />
                <Route path='creepers' element={<NotFound/>} />
                <Route path='*' element={<NotFound/>} />
              </Route>  
              <Route path='/blogs' element={<Blogs/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/plantdetails/:id' element={<PlantDetails/>} />
              <Route path='*' element={<PageNotFound/>} />
          </Routes>
          </Router>
      </header>
    </div>

    </>
    
  );
}


export default App;
