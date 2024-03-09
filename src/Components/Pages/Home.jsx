import { FaQuestionCircle } from "react-icons/fa"
import Button from "../layout/Button"
import { useNavigate, Link } from "react-router-dom"



function Home() {
  const navigate = useNavigate()

  return (
    <>
    <div className="container">
      <div className="card">
        <h1 className="head">Welcome to Group B Company</h1>
        <p>Thank you for using our products</p>
        <p>We would like you to give a review about your last experience using our products</p>
        <br /> <br />
        <Button type='button' variant='secondary' onClick={() => navigate("/review")}>
            Review
        </Button>
      </div>
      <div className="about-link">
        <Link to="/about">
          <FaQuestionCircle size={40} />
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home
