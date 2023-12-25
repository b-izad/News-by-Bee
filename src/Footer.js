import React from 'react';
import { FcApproval } from 'react-icons/fc';
import './Footer.css'; // Ensure this CSS file is created and linked

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        <FcApproval size={60} />
      </div>
      <div className="footer-links">
 
        <a href="mailto:contact@example.com" className="contact-link">Contact us</a>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="website-link">Bee's Personal Website</a>
      </div>
    </footer>
  );
};

export default Footer;
