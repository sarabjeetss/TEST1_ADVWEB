import Logo from './logo.jpg'
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="myNav navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/"> <h3 className='logoname'><img src={Logo} className='logo-ctl'/> State Bank Of India</h3></Link>
            <ul className=" navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer/>

      </div>
    </BrowserRouter>
  );
};

export default App;
