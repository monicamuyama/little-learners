import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the components you want to use
import TopBarPage from './TopBarPage';
import QuizzesManagement from './QuizzesManagement';
import Materials from './Materials';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Integrating the new components */}
      <div className="page-content">
        {/* Top Bar and Teacher Dashboard */}
        <TopBarPage />

        {/* Quizzes Management */}
        <QuizzesManagement />

        {/* Materials Management */}
        <Materials />
      </div>
    </div>
  );
}

export default App;
