import React from "react";
import Header from "../../components/Header/Header";
import "./NewsFeed.scss";
import ProfilePic from '../../assets/images/feelswowman.png';

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <Header />
      <div className="newsfeed-card">
        <div className="newsfeed-card-single">
          <div className="newsfeed-card-top">
        <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
          <h1 className="newsfeed-card-header">User</h1>
          </div>
          <video id="videoPlayer" width="650" controls muted="muted">
            <source src="http://localhost:5000/video/moo" type="video/mp4" />
          </video>
        </div>
        <div className="newsfeed-card-single">
          <div className="newsfeed-card-top">
        <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
          <h1 className="newsfeed-card-header">User</h1>
          </div>
          <video id="videoPlayer" width="650" controls muted="muted">
            <source src="http://localhost:5000/video/int" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
