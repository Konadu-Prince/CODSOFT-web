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
        </header>

        <Route path="/" exact>
          <HomeSection />
        </Route>
        <Route path="/about">
          <AboutSection />
        </Route>
        <Route path="/skills">
          <SkillsSection />
        </Route>
        <Route path="/projects">
          <ProjectsSection />
        </Route>
        <Route path="/resume">
          <ResumeSection />
        </Route>
        <Route path="/contact">
          <ContactSection />
        </Route>
      </div>
    </Router>
  );
}

function HomeSection() {
  return (
    <section id="home">
      <h2>Welcome to my Portfolio!</h2>
      {/* Add content for the home section */}
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <h2>About Me</h2>
      {/* Add content for the about section */}
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>C++</li>
      </ul>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* Add content for the projects section */}
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      {/* Add content for the resume section */}
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: konaduprince26@gmail.com</p>
      <p>Phone: 0558647156</p>
    </section>
  );
}

export default App;
