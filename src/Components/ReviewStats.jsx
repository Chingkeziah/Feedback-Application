

function ReviewStats({reviews}) {
    // sum of the total rating and divided by the total length of the array
    let average = reviews?.reduce((acc, cur) => {
        return acc + cur.rating}, 0)/reviews?.length

        // this converts the average output to 1 decimal point
   average = average.toFixed(1)
  return (
    <>
      <div className="box">
        <div className="review-stats">
          <p>Reviews: {reviews?.length}</p>

          <p>{isNaN(average) ? 0 : average}</p>
        </div>
      </div>
    </>
  )
}

export default ReviewStats
