import { useState } from "react"
import Button from "./layout/Button"
import Rating from "./Rating"

const spanStyle = {
  display: 'block',
  marginTop: '10px',
  fontStyle: 'italic'
}

function ReviewForm({handleAdd}) {
  // sate for input text
    const [text, setText] = useState('')

    // state for btn (disabled)
      const [btnDisabled, setBtnDisabled] = useState(true)
    
    // state for validation (character) 
      const [msg, setMsg] = useState('')

    //state to handle ratings from users
    const [rating, setRating] = useState(8)

//  function to update the text state (in the input field) 
// and also validate the text characters to be above 20 before button will be enables
    const textHandler =(e) => {
      if(text === ''){
        setBtnDisabled(true)     //disable button
        setMsg(null)   //do not display message
      } else if(text !== '' && text.trim().length <= 20){
        setMsg('Your review must be above 20 characters')
        setBtnDisabled(true)     //disable button
      }else {
        setMsg(null)  //do not display message
        setBtnDisabled(false)    //enable button
      }
        setText(e.target.value)
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
    <div className="container">
      <div className="card">
        <form onSubmit={formSubmit}>
            <h3>Kindly drop a Review for our service you just experienced.</h3>
            <Rating ratingState={(rating) => setRating(rating)} />
            <br /><br />
            <div className="input-group">
                <input type="text"value={text} placeholder="Write your review here" onChange={textHandler} />
                
                <Button type='submit' variant='secondary' isDisabled={btnDisabled}>
                    Submit
                </Button>
            </div>
            {msg && (<span className="message" style={spanStyle}>{msg}</span>)}
        </form>
      </div>
    </div>
    </>
  )
}

export default ReviewForm
