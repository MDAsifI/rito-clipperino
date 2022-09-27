import React from "react";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Login from "../../components/Login/Login";
import "./LoginPage.scss";

const NewsFeed = () => {
    return(
      <div className="login">
        <LoginHeader/>
        <Login/>
      </div>
    )
}

export default NewsFeed