import React from "react";
import "./LoginHeader.scss";
import logo from '../../assets/images/logo.jpg'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ProfilePic from '../../assets/images/feelswowman.png';
import app from "../../firebase"
import { Navigate, Link } from "react-router-dom"
import "./LoginHeader.scss"

const LoginHeader = () => {
    return(
      <section className="header">
      <div className="mobile-header">
      <a href="/home">
        <img className="mobile-header__image" src={logo} alt="logo"></img>
        </a>
      </div>
      <div className="tablet-plus-header">
        <div className="tablet-plus-header__containerL">
        <a href="/home">
          <img className="tablet-plus-header__logo" src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="tablet-plus-header__containerR">
          <a href="/upload">
          <AddBoxOutlinedIcon className="tablet-plus-header__upload" sx={{ fontSize: 60}} />
          </a>
          <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
          <a href="/">
          <button className="signup-button">Sign Up</button></a>
        </div>
      </div>  
      </section>
      
    )
}

export default LoginHeader