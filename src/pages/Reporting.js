import "../styles.css";
import useReviewContext from "../context/ReviewContext";

export function Reporting() {
  const { reviewItems } = useReviewContext();
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
