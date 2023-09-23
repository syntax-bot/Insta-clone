import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">𝓘𝓷𝓼𝓽𝓪𝓢𝔂𝓷𝓽𝓪𝔁𝓑𝓸𝓽</div>
      <NavLink to="/">
        <IconButton aria-label="Home">
          <HomeIcon fontSize="large" />
        </IconButton>
        <span className="navIconText"> Home</span>
      </NavLink>
      <NavLink to="/search">
        <IconButton aria-label="Home">
          <SearchIcon fontSize="large" />
        </IconButton>
        <span className="navIconText">Search</span>
      </NavLink>
      <NavLink to="/addpost">
        <IconButton aria-label="Home">
          <AddBoxOutlinedIcon fontSize="large" />
        </IconButton>
        <span className="navIconText">Create</span>
      </NavLink>
      <NavLink to="/reels">
        <IconButton aria-label="Home">
          <LiveTvOutlinedIcon fontSize="large" />
        </IconButton>
        <span className="navIconText">Reels</span>
      </NavLink>
      <NavLink to="profile">
        <IconButton aria-label="Home">
          <Person2OutlinedIcon fontSize="large" />
        </IconButton>
        <span className="navIconText">Profile</span>
      </NavLink>
    </div>
  );
}
