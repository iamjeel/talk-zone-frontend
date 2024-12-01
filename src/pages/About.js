import React from 'react';
import { useNavigate } from 'react-router-dom';

import './About.css';

const About = () => {
    const navigate = useNavigate();

  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Unsaid</h1>
        <p>
          At Unsaid, we believe that sometimes, silence speaks louder than words. Our platform is designed to help you
          break free from the constraints of traditional communication. Here, you can share your thoughts, connect with
          people nearby, and express yourself in ways that feel natural—without the pressure of identity or judgment.
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Unsaid was created with a simple mission: to create a space where users can freely express themselves without
          the baggage of personal identification. In a world where everyone is constantly judged based on their identities,
          Unsaid offers a refreshing alternative—anonymity with a touch of connection.
        </p>
        <p>
          Whether you're looking for a safe space to vent, share ideas, or just have a chat with someone nearby, Unsaid is
          here to make sure your voice is heard without compromise.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          Unsaid connects people based on location, enabling conversations in rooms that are nearby—ensuring that your
          interactions are spontaneous, relevant, and real. The idea is simple: we strip away everything except the
          conversation itself, letting people connect based purely on their thoughts and feelings.
        </p>
        <ul>
          <li><strong>Location-based rooms:</strong> Join a room that's within a 5 km radius of your location, and connect with people around you.</li>
          <li><strong>Anonymity:</strong> No names, no profiles—just words that matter.</li>
          <li><strong>Freedom of expression:</strong> Share your unspoken thoughts without fear of judgment or expectation.</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Unsaid?</h2>
        <p>
          In a world that's constantly connected, it's easy to forget what real connection feels like. Unsaid gives you
          the freedom to be authentic, without the constraints of social expectations. Whether you're seeking a deep
          conversation or a lighthearted chat, Unsaid allows you to express yourself fully, without reservation.
        </p>
        <ul>
          <li><strong>Connect with strangers:</strong> Meet new people based on shared interests and proximity.</li>
          <li><strong>Privacy-focused:</strong> Your privacy is our priority, ensuring your conversations stay anonymous.</li>
          <li><strong>No strings attached:</strong> No pressure, no commitments—just real-time conversations as they happen.</li>
        </ul>
      </section>

      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>
          Ready to say what you’ve never said? Download Unsaid today, join a room near you, and start connecting with people
          around you. We’re constantly working on improving the experience and adding new features. Stay tuned for future
          updates and new ways to express yourself.
        </p>
        <button onClick={() => navigate('/home')} className="cta-button">
          Get Started
        </button>      </section>

      <footer className="footer">
        <p>© 2024 Unsaid. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default About;
