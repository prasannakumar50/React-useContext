import { Link } from "react-router";

import ReviewCounter from "./ReviewCounter";

export default function Nav() {
  return (
    <nav>
      <div className="logo">reviewer</div>
      <div className="links">
        <Link to="/" className="nav-link">
          Report
        </Link>
        <Link to="/pending" className="nav-link">
          Pending <ReviewCounter />
        </Link>
        <Link to="/review" className="nav-link">
          Review
        </Link>
        {/* Your routes can go here */}
      </div>
    </nav>
  );
}
