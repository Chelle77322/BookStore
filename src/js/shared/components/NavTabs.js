import React from "react";
import {Link} from "react-router-dom";
function NavTabs() {
    return(
        <ul className = "nav nav-tabs">
            <li className = "nav-item">
            <Link to = "/" className = {window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Search for book</Link>
            </li>
            <li className = "nav-item">
            <Link to = "/" className = {window.location.pathname === "/Save" ? "nav-link active" : "nav-link"}>Save the book</Link>
            </li>  
        </ul>
    );
}
export default NavTabs;