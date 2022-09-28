import React from "react";
import Header from "../../components/Header/Header";
import "./NewsFeed.scss";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <Header />
      <div className="newsfeed-card">
        <div className="newsfeed-card-single">
          <h1 className="newsfeed-card-header">User</h1>
          <video id="videoPlayer" width="650" controls muted="muted">
            <source src="http://localhost:5000/video/moo" type="video/mp4" />
          </video>
        </div>
        <div className="newsfeed-card-single">
          <h1 className="newsfeed-card-header">User</h1>
          <video id="videoPlayer" width="650" controls muted="muted">
            <source src="http://localhost:5000/video/int" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
