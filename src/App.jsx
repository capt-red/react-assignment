/*
 * Temporary problems array schema
 */
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Problemsetall from '../components/Problemsetall';
import Problem from '../components/Problem';
import Home from '../components/Home';
import './App.css'
function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     

    return (
    <div>
        Finish the assignment! Look at the comments in App.jsx as a starting point
    </div>
  )*/
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problems" element={<Problemsetall/>} />
        <Route path="problems/:slug" element={<Problem/>} />
      </Routes>
    </Router>
  );
  
}



  




export default App;
