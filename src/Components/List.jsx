import ReviewItem from "./Reviewitem"

function List({reviews}) {

    // if theres no review i.e the state is ''
    // if(!reviews || reviews.length === 0){
    //     return <div className="container"><p>No review yet!</p></div>
    //    }
    const deleteReview = (id) =>{
      if(window.confirm(`Are you sure you want to
      delete this review?`)){
        setReview(reviews.filter((review) => review.id !== id))
      }
    }


  return (
    <>
      <div>
        {reviews.map((review) => (
            <div  key={review.id}>
                <ReviewItem review={review} deleteReview={deleteReview} />
            </div>
        ))}
      </div>
    </>
  )
}

export default List
