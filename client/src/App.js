import React from 'react';
import './App.css';
import Footer from './Footer';
import Capture from './Capture.PNG';
import two from './two.webp';
import image3 from './image3.PNG';
import { Route, Routes, Link } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';

function App() {
  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <nav className="App-nav">
        <div className="App-logo">🌟 Little Learners</div>
        <div className="App-nav-links">
          <Link to="/signup" className="App-nav-link">Sign Up</Link>
          <Link to="/signin" className="App-nav-link">Sign In</Link>
        </div>
      </nav>

      {/* Main Content */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <header className="App-header">
                <h1>Welcome to Little Learners!</h1>
                <p>Choose the Right Time, Every Time! Flexible scheduling means your child learns when it’s best for them – and you!</p>
                <p>A Safe, Supportive Online Classroom Where Little Learners Blossom Together! A welcoming environment led by professionals who care.</p>
                <p>Stay in the Know! Get regular updates on your child’s achievements and areas of improvement to watch them grow!</p>
              </header>

              {/* Content Section without Scrolling */}
              <div className="content-container">
                <div className="content-item" style={{ backgroundImage: `url(${Capture})` }}>
                  <h2>Story Time</h2>
                  <p>Discover new stories each day!</p>
                  <p>Let your child’s imagination soar with enchanting tales</p>
                </div>
                <div className="content-item" style={{ backgroundImage: `url(${two})` }}>
                  <h2>Music and Rhymes</h2>
                  <p>Sing along with popular rhymes and songs!</p>
                  <p>Songs and Rhymes for Smart Minds</p>
                </div>
                <div className="content-item" style={{ backgroundImage: `url(${image3})` }}>
                  <h2>Interactive Quizzes</h2>
                  <p>Quizzes That Make Learning Fun</p>
                  <p>Track your child’s growth with playful quizzes</p>
                </div>
              </div>
            </>
          } 
        />
        
        {/* Sign In and Sign Up Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
