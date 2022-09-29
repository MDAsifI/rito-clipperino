import React from "react";
import "./Card.scss";
import ProfilePic from '../../assets/images/feelswowman.png';
import likes from "../../assets/images/likes.png"
import comments from "../../assets/images/comments.png"
import share from "../../assets/images/share.png" 

const Card = () => {
  return (
      <div className="newsfeed-card">
        <div className="newsfeed-card-single">
          <div className="newsfeed-card-top">
        <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
          <h1 className="newsfeed-card-header">User</h1>
          </div>
          <video id="videoPlayer" width="650" controls muted="muted">
            <source src="http://localhost:5000/video/moo" type="video/mp4" />
          </video>
          <div className="newsfeed-card-bottom">
          <img className="newsfeed-card-icons" src={likes} alt="likes"></img>
          <img className="newsfeed-card-icons" src={comments} alt="comments"></img>
          <img className="newsfeed-card-icons" src={share} alt="share"></img>
          </div>
        </div>
        <div className="newsfeed-card-single">
          <div className="newsfeed-card-top">
        <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
          <h1 className="newsfeed-card-header">User</h1>
          </div>
          <video id="videoPlayer" width="650" controls muted="muted">
            <source src="http://localhost:5000/video/int" type="video/mp4" />
          </video>
          <div className="newsfeed-card-bottom">
          <img className="newsfeed-card-icons" src={likes} alt="likes"></img>
          <img className="newsfeed-card-icons" src={comments} alt="comments"></img>
          <img className="newsfeed-card-icons" src={share} alt="share"></img>
          </div>
        </div>
        <div className="newsfeed-card-single">
          <div className="newsfeed-card-top">
        <img className="tablet-plus-header__profile" src={ProfilePic} alt="profilepic"></img>
          <h1 className="newsfeed-card-header">User</h1>
          </div>
          <video id="videoPlayer" width="650" controls muted="muted">
            <source src="http://localhost:5000/video/wmb" type="video/mp4" />
          </video>
          <div className="newsfeed-card-bottom">
          <img className="newsfeed-card-icons" src={likes} alt="likes"></img>
          <img className="newsfeed-card-icons" src={comments} alt="comments"></img>
          <img className="newsfeed-card-icons" src={share} alt="share"></img>
          </div>
        </div>
      </div>
  );
};

export default Card;