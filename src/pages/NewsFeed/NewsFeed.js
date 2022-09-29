import React from "react";
import Header from "../../components/Header/Header";
import "./NewsFeed.scss";
import Card from "../../components/Card/Card"

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <Header />
      <Card/>
    </div>
  );
};

export default NewsFeed;
