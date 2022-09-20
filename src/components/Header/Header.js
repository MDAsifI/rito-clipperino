import React from "react";
import "./Header.scss";
import logo from '../../assets/images/logo.jpg'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ProfilePic from '../../assets/images/feelswowman.png';

const Header = () => {
    return(
      <section className="header">
      <div className="mobile-header">
        <img className="mobile-header__image" src={logo} alt="logo"></img>
      </div>
      <div className="tablet-plus-header">
        <div className="tablet-plus-header__containerL">
          <img className="tablet-plus-header__logo" src={logo} alt="logo"></img>
        </div>
        <div className="tablet-plus-header__containerR">
          <AddBoxOutlinedIcon className="tablet-plus-header__upload" sx={{ fontSize: 60}} />
          <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
        </div>
      </div>  
      </section>
      
    )
}

export default Header