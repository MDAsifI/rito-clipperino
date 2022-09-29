import React from "react";
import "./AccountPage.scss";
import Header from "../../components/Header/Header";
import ProfilePic from "../../assets/images/feelswowman.png"
import Card from "../../components/Card/Card";

const AccountPage = () => {
    return(
      <div className="account">
      <Header/>
      <div className="bio">
        <div className="bio-left">
        <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
        </div>
        <div className="bio-right">
          <h2 className="bio-desc">
            This is the about me section. I am a frog.
          </h2>
        </div>
      </div>
      <Card/>
      </div>
    )
}

export default AccountPage