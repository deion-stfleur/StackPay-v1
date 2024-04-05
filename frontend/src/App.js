import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import DemoScreen from './pages/DemoScreen';

function App() {
  return (
    <>
 <Router>

  <nav>

    <div className='nav-row'>
      <div>
        <p>StackPay</p>
      </div>


      <div className='nav-right'>

        <Link to="/demo-dash" className='link'>
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
