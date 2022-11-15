import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

export default function Header({position}) {
  console.log(position);
  return (
    <>
      <div className="header" style={{position: 'fixed'}}>
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
        <ul className="header-menu">
          <Link to="/list-products">
            <li>MÁY POD</li>
          </Link>
          <Link to="/list-products">
            <li>TINH DẦU</li>
          </Link>
          <Link to="/list-products">
            <li>POD 1 LẦN</li>
          </Link>
          <Link to="/list-products">
            <li>PHỤ KIỆN</li>
          </Link>
          <Link to="/list-products">
            <li>VỀ CHÚNG TÔI</li>
          </Link>
        </ul>
      </div>
    </>
  )
}
