import React from 'react'
import {NavLink} from 'react-router-dom'
import {GiShoppingBag} from 'react-icons/gi'
import { useAuth } from '../../context/auth'
import toast from "react-hot-toast"
import SearchInput from '../Form/SearchInput'
import useCategory from '../../hooks/useCategory'

const Header = () => {
  const [auth,setAuth] = useAuth();
  const categories = useCategory()
  const handleLogout = () => {
    setAuth({
      ...auth, user:null, token:''
    })
    localStorage.removeItem('auth');
    toast.success("Logout successfully");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink to="/" className="navbar-brand" href="#">
         <GiShoppingBag/> ECOMMERCE APP </NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <SearchInput/>
        
      <li className="nav-item">
          <NavLink to="/home" className="nav-link" href="#" >
            Home
            </NavLink>
        </li>

        <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to={"/categories"}>
                      All Categories
                    </NavLink>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </NavLink>
                      </li>
                  ))}
                </ul>
              </li>
        
          {!auth.user ? (<>
          <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">
            Register
            </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">
            LogIn
            </NavLink>
        </li>
          </>) : (<>
          
            <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {auth?.user?.name}
  </NavLink>
  <ul className="dropdown-menu">
    <li><NavLink 
    to={`/dashboard/${
      auth?.user?.roleNumber === 1 ? 'admin' : 'User'
    }`}
    className="dropdown-item">
      Dashboard
      </NavLink>
      </li>
    <NavLink onClick={handleLogout} to="/login" className="dropdown-item" href="#">
            Logout
            </NavLink>
  </ul>
</li>
          </>)
        }

        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#">
            Cart (0)
            </NavLink>
        </li>
    
      </ul>

    </div>
  </div>
</nav>

        
    </>
  )
}

export default Header