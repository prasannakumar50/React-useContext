/**
 * This is a placeholder for navigation.
 * You can integrate it with router of your choice.
 */
import React, { useContext } from "react";
import { Link } from "react-router";
import ReviewContext from "../context/ReviewContext";

export default function Nav() {
  const { reviewItems } = useContext(ReviewContext);
  return (
    <nav>
      <div className="logo">reviewer</div>
      <div className="links">
        <Link to="/" className="nav-link">
          Report
        </Link>
        <Link to="/pending" className="nav-link">
          Pending ({reviewItems.filter((rI) => !rI.isReviewed).length} /
          {reviewItems.length})
        </Link>
        <Link to="/review" className="nav-link">
          Review
        </Link>
        {/* Your routes can go here */}
      </div>
    </nav>
  );
}
