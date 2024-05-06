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
import EventPage from './pages/EventPage';



function App() {


  const [showNav, setShowNav] = useState(true)


  useEffect(() => {
    const pathsToHideNav = ['/account-dashboard',]; // Add your paths here
    const currentPath = window.location.pathname;
    const shouldHideNav = pathsToHideNav.some(path => currentPath.endsWith(path));

    setShowNav(!shouldHideNav);
  }, []);




  return (
    <>
 <Router>

  <div>
  {showNav && (
  <>
  <nav>

              <div className='nav-row'>
                <Link className='link-dark' to="/">
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

                  <a style={{textDecoration:'none'}} href="#learn-more">
                  <div className='lm-btn'>
                    <p className='lm-text'>Learn More</p>
                  </div>
                  </a>
                </div>
              </div>
            </nav>
            {/* <hr className='main-line' /> */}
            </>

  )}
  </div>


  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/demo-dash" element={<DemoScreen />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path="/account-dashboard" element={<AccountDashboard  />} />  
    <Route path="/signin" element={<Signin />} /> 
    <Route path="/event/:eventId" element={<EventPage />} /> 
  </Routes>
 </Router>

  <footer>

    <hr className='footer-line' />

    <div>

        <div className='footer-inner'>

      <div>
        <p className='footer-h1-logo'>StackPay</p>
        <p className='footer-p-copy'>StackPay is not a bank. Banking services provided by third party.</p>
      </div>

      <div className='footer-pos'>
      <p>2024 StackPay All Rights reserved. </p>
      </div>
        </div>

    </div>

  </footer>
    </>
 
  );
}

export default App;
