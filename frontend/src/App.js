import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <nav>
          <Link to="/">Login </Link> 
          <Link to="/register"> Register</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
      <br></br>
    </div>
  );
}

export default App;
