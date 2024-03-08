import Header from "./Components/layout/Header"
import { useState } from "react"
import data from "./Data/reviewData"
import List from "./Components/List"
import ReviewStats from "./Components/ReviewStats"

function App() {
  const [review, setReview] = useState(data)

  // function to delete review
  const deleteReview =  (id) =>{
    if(window.confirm('Are you sure, you want to delete this review?')){
      setReview(review.filter((review) => review.id !== id))
    }
  }

  return (
    <>
    <Header text="Review Application" />
    <div className="container">
      <ReviewStats reviews={review} />
      <List reviews={review} deleteReview={deleteReview} />
    </div>

    
    </>
  )
}

export default App
