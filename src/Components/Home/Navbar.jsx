import React from 'react'
import './Navbar.css'
import { NavLink, Outlet} from "react-router-dom";
import logo from '.././../assets/Logo.jpg'
import Drawer from './Drawer'
const setActive = ({isActive}) => isActive ? 'active-link' : '';
const Navbar = () => {
  
  return (
    <div className='navbar'>
        <div className="left-wrapper">
          <NavLink to={"/home"}><img className='nav-logo' src={logo} alt="" /></NavLink>            
        </div>
        <div className="right-wrapper">
        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/about"}>Men haqimda</NavLink>
        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/skills"}>Ko'nikmalarim</NavLink>
        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/work"}>Qilgan ishlarim</NavLink>
        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/contact"}>Aloqa</NavLink>
        </div>
          <Outlet />
        <div className="drawer">
          <Drawer />
        </div>
    </div>
  )
}

export default Navbar