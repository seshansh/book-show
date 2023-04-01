import React from "react";
import './AppHeader.css';
import { IoTicketSharp } from "react-icons/io5";

const AppHeader =() => {
    return <div className="nav-bar">
        <div className="nav__item">
            <h1 className="site-name">Book
            <IoTicketSharp color="#DC3535"/>Show
            </h1>
            
        </div>
    </div>
}

export default AppHeader;