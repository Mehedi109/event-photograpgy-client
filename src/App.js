import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Dashoboard from './Pages/Dashboard/Dashboard/Dashoboard';
import AddCategories from './Pages/Dashboard/AddCategories/AddCategories';
import PlaceOrder from './Pages/Order/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order/:id" element={<PlaceOrder />} />
          <Route path="/dashboard" element={<Dashoboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/addCategories" element={<AddCategories />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </Router>
      {/* <Header></Header>
      <Home></Home> */}
    </div>
  );
}

export default App;
