import Header from "./Components/layout/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Components/Pages/Home";
import Review from "./Components/Pages/Review";
import About from "./Components/Pages/About";
import AllReviews from "./Components/Pages/AllReviews";
import reviewData from "./Data/reviewData";
import { useState } from "react";

function App() {
 const [review, setReview]= useState(reviewData)
 
   return (
    <>
    
      <Header text="Review Application" />
    {/* structure of the browser router */}
        <Router>
          <Routes>
            {/* "/" tells the browser which page to render once a site is opened */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/review" element={<Review setReview={setReview} review={review}  />} />
              <Route path="/all-reviews" element={<AllReviews review={review}  setReview={setReview} />} />
          </Routes>
        </Router>
          
           



        
      
    
    </>
  )
}

export default App
