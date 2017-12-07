import React from "react";
import {Link} from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
        <Link className="link" to="/">Who's in Space?</Link>
        <Link className="link " to="/IssLocator">ISS Locator</Link>
        <Link className="link" to="/UpcomingLaunches">Upcoming Launches</Link>
    </div>
  )
}

export default Navbar;
