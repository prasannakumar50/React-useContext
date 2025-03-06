import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { Reporting } from "./pages/Reporting";
import { Pending } from "./pages/Pending";
import ReviewContext from "./context/ReviewContext";
import { useState } from "react";
import Review from "./pages/Review";

function ReviewProvider({ children }) {
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

export default function App() {
  return (
    <ReviewProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Reporting />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </ReviewProvider>
  );
}
