/**
 * This is a placeholder for navigation.
 * You can integrate it with router of your choice.
 */
import React from "react";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav>
      <div className="logo">reviewer</div>
      <div className="links">
        <Link to="/" className="nav-link">
          Report
        </Link>
        <Link to="/pending" className="nav-link">
          Pending
        </Link>
        {/* Your routes can go here */}
      </div>
    </nav>
  );
}
