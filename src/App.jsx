import Header from "./Components/layout/Header"
import { useState } from "react"
import data from "./Data/reviewData"
import List from "./Components/List"
import ReviewStats from "./Components/ReviewStats"
import ReviewForm from "./Components/ReviewForm"
import { v4 as uuid} from 'uuid'

function App() {
  const [review, setReview] = useState(data)

  // function to delete review
  const deleteReview =  (id) =>{
    if(window.confirm('Are you sure, you want to delete this review?')){
      setReview(review.filter((review) => review.id !== id))
    }
  }

  // function to add a review
  const AddReview = (newReview) => {
    newReview.id=uuid()
    setReview([newReview, ...review])
  }
  return (
    <>
        



        <Header text="Review Application" />
        <ReviewForm handleAdd={AddReview} />
        <div className="container">
          <ReviewStats reviews={review} />
          <List reviews={review} deleteReview={deleteReview} />
        </div>

    
    </>
  )
}

export default App
