import React from 'react';
import './Footer.css'; // Assuming you have a Footer.css file for styling
import bgFooter from './assets/bg_Footer.png'; // Assuming you have a bg_Footer.jpg file for background image

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${bgFooter})` }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} InviteKaro. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-of-service"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
