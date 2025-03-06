import useReviewContext from "../context/ReviewContext";

export default function ReviewCounter() {
  const { reviewItems } = useReviewContext();
  return (
    <span>
      ({reviewItems.filter((rI) => !rI.isReviewed).length} /{reviewItems.length}
      )
    </span>
  );
}
