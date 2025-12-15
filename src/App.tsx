import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">Evgeny's Apps</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Evgeny Vinnik. All rights
            reserved.
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
