import Header from "./Components/layout/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Components/Pages/Home";
import Review from "./Components/Pages/Review";
import About from "./Components/Pages/About";

function App() {
 
  return (
    <>
    
      <Header text="Review Application" />
    {/* structure of the browser router */}
        <Router>
          <Routes>
            {/* "/" tells the browser which page to render once a site is opened */}
              <Route exact path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/review" element={<Review />} />
          </Routes>
        </Router>
          
           



        
      
    
    </>
  )
}

export default App
