import React from "react";
import "./SignupHeader.scss";
import logo from "../../assets/images/logo.jpg";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ProfilePic from "../../assets/images/feelswowman.png";

const SignupHeader = () => {
  return (
    <section className="header">
      <div className="mobile-header">
        <a href="/home">
          <img className="mobile-header__image" src={logo} alt="logo"></img>
        </a>
      </div>
      <div className="tablet-plus-header">
        <div className="tablet-plus-header__containerL">
          <a href="/home">
            <img
              className="tablet-plus-header__logo"
              src={logo}
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="tablet-plus-header__containerR">
          <a href="/upload">
            <AddBoxOutlinedIcon
              className="tablet-plus-header__upload"
              sx={{ fontSize: 60 }}
            />
          </a>
          <a href="/account">
          <img
            className="tablet-plus-header__profile"
            src={ProfilePic}
            alt="profilepic"
          ></img>
          </a>
          <a href="/login">
            <button className="login-button">Login</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignupHeader;
