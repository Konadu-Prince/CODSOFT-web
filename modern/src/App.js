// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-dark text-white text-center p-4">
          <div className="container">
            <h1 className="display-4">KONADU PRINCE</h1>
            <p className="lead">Web Developer</p>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <Route path="/" exact component={HomeSection} />
        <Route path="/about" component={AboutSection} />
        <Route path="/skills" component={SkillsSection} />
        <Route path="/projects" component={ProjectsSection} />
        <Route path="/resume" component={ResumeSection} />
        <Route path="/contact" component={ContactSection} />
      </div>
    </Router>
  );
}

function HomeSection() {
  return (
    <section id="home" className="text-center">
      <div className="container">
        <h2>Welcome to my Portfolio!</h2>
        {/* Add content for the home section */}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        {/* Add content for the about section */}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>C++</li>
        </ul>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        {/* Add content for the projects section */}
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume">
      <div className="container">
        <h2>Resume</h2>
        {/* Add content for the resume section */}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>Email: konaduprince26@gmail.com</p>
        <p>Phone: 0558647156</p>
      </div>
    </section>
  );
}

export default App;
