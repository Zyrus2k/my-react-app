import React from 'react';

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm a passionate software developer with a bit of 1 years of experience 
          in creating a simple web applications. My journey in Information Technology is started when I built 
          my first website at 18, and I've been hooked ever since.
        </p>
        <p>
          I specialize in full-stack development using modern technologies like React, 
          Node.js, and MongoDB. I believe in writing clean, maintainable code and 
          creating intuitive user experiences.
        </p>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>🎯 What I Do</h4>
            <ul className="list-unstyled">
              <li>✓ Web Application Development</li>
              <li>✓ Responsive Design</li>
              <li>✓ API Integration</li>
              <li>✓ Performance Optimization</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>🌟 When I'm Not Coding</h4>
            <ul className="list-unstyled">
              <li>📚 Reading Tech Blogs</li>
              <li>☕ Exploring Coffee Shops</li>
              <li>🎮 Playing Video Games</li>
              <li>🏃 Hiking & Outdoor Activities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;