/**
 * This is a placeholder for navigation.
 * You can integrate it with router of your choice.
 */
import React, { useContext } from "react";
import { Link } from "react-router";
import ReviewContext from "../context/ReviewContext";

export default function Nav() {
  const { initialItems } = useContext(ReviewContext);
  return (
    <nav>
      <div className="logo">reviewer</div>
      <div className="links">
        <Link to="/" className="nav-link">
          Report
        </Link>
        <Link to="/pending" className="nav-link">
          Pending ({initialItems.filter((rI) => !rI.isReviewed).length} /
          {initialItems.length})
        </Link>
        {/* Your routes can go here */}
      </div>
    </nav>
  );
}
