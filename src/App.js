import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="main-card">
            {/* Header with Navigation */}
            <header className="header">
              <h1>My Portfolio</h1>
              <nav className="nav-menu">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  About
                </NavLink>
                <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  Skills
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  Contact
                </NavLink>
              </nav>
            </header>

            {/* Main Content Area */}
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            {/* Footer */}
            <footer className="footer">
              <div className="footer-content">
                <div className="footer-left">
                  <span className="footer-text">Email: your.email@example.com</span>
                  <span className="footer-text">GitHub: @yourusername</span>
                  <span className="footer-text">LinkedIn: yourprofile</span>
                </div>
                <div className="footer-right">
                  <p className="footer-copyright">© 2024 Your Name. All rights reserved.</p>
                </div>
              </div>
              <p className="footer-credit">Built with React</p>
            </footer>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;