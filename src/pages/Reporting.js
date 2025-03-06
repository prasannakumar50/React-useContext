import { useContext } from "react";
import ReviewContext from "../context/ReviewContext";
import "../styles.css";

export function Reporting() {
  const { reviewItems } = useContext(ReviewContext);
  return (
    <div className="app">
      <h1>status </h1>
      <hr />
      <h1>Pending</h1>
      <p>{reviewItems.filter((entry) => !entry.isReviewed).length}</p>
      <hr />
      <h1>reviewed</h1>
      <p>{reviewItems.filter((entry) => entry.isReviewed).length}</p>
    </div>
  );
}
