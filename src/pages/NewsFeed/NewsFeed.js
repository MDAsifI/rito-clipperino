import React from "react";
import Header from "../../components/Header/Header";
import "./NewsFeed.scss";

const NewsFeed = () => {
    return(
      <div className="newsfeed">
        <Header/>
        <video className="newsfeed__video"></video>
      </div>
    )
}

export default NewsFeed