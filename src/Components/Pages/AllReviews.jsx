import { Link } from "react-router-dom"
import { FaHouseDamage } from "react-icons/fa"
import { useState } from "react"
import data from "../../Data/reviewData"
import List from "../List";
import ReviewStats from "../ReviewStats";
import ReviewForm from "../ReviewForm";
import { v4 as uuid} from 'uuid'




function AllReviews({handleAdd}) {

  const [review, setReview] = useState(data)
  // function to delete review
const deleteReview =  (id) => {
  if(window.confirm('Are you sure, you want to delete this review?')){
    setReview(review.filter((review) => review.id !== id))
  }
}

// function to add a review
const AddReview = (newReview) => {
  newReview.id=uuid()
  setReview([newReview, ...review])
}

// function to submit a review
const formSubmit = (e) => {
  e.preventDefault()
  if(text.trim().length > 20){
    const newReview = {
      text,
      rating
    }
    handleAdd(newReview)
    setText('')
  }
}

  return (
    <>
        <ReviewForm handleAdd={AddReview} />
            <div className="container">
                <ReviewStats reviews={review} />
                <List reviews={review} deleteReview={deleteReview} />
            </div>

        <div className="about-link">
            <Link to="/">
            <FaHouseDamage size={40} />
            </Link>
        </div>

      <div className="container">
        {/* <Button type='button' variant='secondary' onClick={() => navigate("/review")}>
            All Reviews
        </Button> */}
      </div>
    </>
  )
}

export default AllReviews