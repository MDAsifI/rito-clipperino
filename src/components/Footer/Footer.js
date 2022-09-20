import React from "react";
import "./Footer.scss";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Upload from "@mui/icons-material/AddBoxOutlined";
import { useState } from "react";

const Footer = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="footer">
    <BottomNavigation
      sx={{ width: "100%", position:'fixed', bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Upload" icon={<Upload />} />
    </BottomNavigation>
    </div>
  );
};

export default Footer;
