import useReviewContext from "../context/ReviewContext";

export default function Review() {
  const { reviewItems, toggleReviewItem } = useReviewContext();
  return (
    <div>
      <h1>to review</h1>
      <p>isReviewd: {reviewItems.filter((rI) => rI.isReviewed).length}</p>
      <div>
        <ul>
          {reviewItems.map((reviewItem) => (
            <li
              style={{
                textDecoration: reviewItem.isReviewed ? "line-through" : "none",
              }}
              onClick={() => toggleReviewItem(reviewItem.url)}
            >
              {reviewItem.url}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
