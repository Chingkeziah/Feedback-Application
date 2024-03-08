import { FaTimes } from "react-icons/fa"

function Reviewitem({review, deleteReview}) {

  return (
    <>
      <div className="card">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
        <button className="close" onClick={deleteReview}>
          <FaTimes />
        </button>
      </div>
    </>
  )
}

export default Reviewitem
