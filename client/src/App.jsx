
import {BrowserRouter as Router , Routes , Route, Navigate } from "react-router"
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  const loggedIn = true;


  return (
    <div>
        <Router>
          
          <Navbar />
          <Routes>  
              <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />}  />
          </Routes>
          <Footer />

        </Router>
    </div>
  )
}

export default App

