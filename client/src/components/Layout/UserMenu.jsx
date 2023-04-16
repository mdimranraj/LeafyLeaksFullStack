import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth';


const UserMenu = () => {
  const [auth] = useAuth();
  return (
    <>
    <div className="text-center">
        <div class="list-group">
            <h4>{auth?.user?.name}'s Panel</h4>
            <Link to="/dashboard/user/profile" className="list-group-item list-group-item-action">
                Profile
            </Link>
            <Link to="/dashboard/user/orders" className="list-group-item  list-group-item-action">Orders</Link>
            <Link to="/dashboard/user/blogs" className="list-group-item list-group-item-action ">Blogs</Link>
            
        </div>
    </div>        

    </>
  )
}

export default UserMenu;