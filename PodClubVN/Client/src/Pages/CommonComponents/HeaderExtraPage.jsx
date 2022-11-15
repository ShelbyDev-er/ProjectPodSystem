import React from 'react'
import { Link } from "react-router-dom";
import TextSlider from './TextSlider';
import SearchIcon from '@mui/icons-material/Search';

export default function HeaderExtraPage() {
  return (
    <>
      <div className="header">
        <div className="header-nav">
          <span className="search">
            <SearchIcon />
          </span>
        </div>
        <Link to="/">
          <div className="header-logo">
            <img src="https://getdisc.com/wp-content/uploads/2020/06/podclub-logo.png" alt="" />
          </div>
        </Link>
        <div className="toggle-nav">
          <i className="fa-solid fa-bars" />
        </div>
        <TextSlider/>
      </div>
    </>
  )
}
