// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Navbar />} />
        <Route path="/blog" element={<Navbar />} />
        <Route path="/resources" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
