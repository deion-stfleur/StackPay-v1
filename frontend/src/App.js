import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import DemoScreen from './pages/DemoScreen';
import SignUp from './pages/SignUp';
import AccountDashboard from './pages/AccountDashboard';
import AuthenticatedRoute from './pages/AuthenticationRoute';
// import { useAuth } from './hooks/auth'; 
import { Navigate } from 'react-router-dom';
import { supabase } from './supabase';
import Signin from './pages/Signin';



function App() {

  return (
    <>
 <Router>

  <nav>

    <div className='nav-row'>
      <Link className='link' to="/">
          <div>
            <p>StackPay</p>
          </div>
      </Link>


      <div className='nav-right'>

        <Link to="/signup" className='link'>
          <div className='td-btn'>
            <p className='td-text'>Try Demo</p>
          </div>
        </Link>
        <div className='spc'></div>
        <div className='lm-btn'>
          <p className='lm-text'>Learn More</p>
        </div>
      </div>
    </div>
  </nav>

  <hr className='main-line' />

  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/demo-dash" element={<DemoScreen />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path="/account-dashboard" element={<AccountDashboard  />} />  
    <Route path="/signin" element={<Signin />} />  
  </Routes>
 </Router>

  <footer>

    <hr className='footer-line' />

    <div>

      <div>
    <p>2024 StackPay All Rights reserved. </p>
      </div>

    </div>

  </footer>
    </>
 
  );
}

export default App;
