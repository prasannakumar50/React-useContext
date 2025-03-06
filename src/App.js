import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { Reporting } from "./pages/Reporting";
import { Pending } from "./pages/Pending";
import ReviewContext from "./context/ReviewContext";
import { useState } from "react";

export default function App() {
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
    <ReviewContext.Provider value={{ initialItems: reviewItems }}>
      <h1>review</h1>
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

      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Reporting />} />
          <Route path="/pending" element={<Pending />} />
        </Routes>
      </Router>
    </ReviewContext.Provider>
  );
}
