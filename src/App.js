import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { Reporting } from "./pages/Reporting";
import { Pending } from "./pages/Pending";
import ReviewContext from "./context/ReviewContext";

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
  ];
  return (
    <ReviewContext.Provider value={{ initialItems: initialReviewItems }}>
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
