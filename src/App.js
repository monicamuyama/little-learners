import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <nav className="App-nav">
        <div className="App-logo">Little Learners</div>
        <div className="App-nav-links">
          <a href="/signup" className="App-nav-link">Sign Up</a>
          <a href="/signin" className="App-nav-link">Sign In</a>
        </div>
      </nav>

      {/* Main Content */}
      <header className="App-header">
        <h1>Welcome to Little Learners!</h1>
        <p className="tagline">Learning and fun, right from the comfort of your home.</p>
        <p className="description">Songs, stories, and activities designed to inspire curiosity and joy in learning!</p>
        <p className="highlight">Every song is a step toward creativity, confidence, and growth!</p>
        <a
          className="App-link"
          href="https://example.com/start"  // Update with your actual link
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Learning!
        </a>
      </header>
    </div>
  );
}

export default App;
