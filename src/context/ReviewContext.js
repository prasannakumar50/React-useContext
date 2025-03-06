import { createContext } from "react";
import { useState, useContext } from "react";

const ReviewContext = createContext();

const useReviewContext = () => useContext(ReviewContext);

export default useReviewContext;

export function ReviewProvider({ children }) {
  const initialReviewItems = [
    {
      url: "https://github.com/repo1",
      isReviewed: false,
    },
    {
      url: "https://github.com/repo2",
      isReviewed: false,
    },
    {
      url: "https://github.com/repo3",
      isReviewed: false,
    },
  ];
  const [reviewItems, setReviewItems] = useState(initialReviewItems);

  function toggleReviewItem(selectedUrl) {
    const updatedReviewItems = reviewItems.map((reviewItem) => {
      if (reviewItem.url != selectedUrl) {
        return reviewItem;
      }

      return {
        ...reviewItem,
        isReviewed: !reviewItem.isReviewed,
      };
    });
    setReviewItems(updatedReviewItems);
  }

  return (
    <ReviewContext.Provider value={{ reviewItems, toggleReviewItem }}>
      {children}
    </ReviewContext.Provider>
  );
}
