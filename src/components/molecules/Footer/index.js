import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        All rights reserved by {' '}
        
        <a
          href="https://www.linkedin.com/in/dhiraj-singh-9bb08a230"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Dhiraj Singh
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a>
        <a
          href="https://github.com/dhirajsingh02/Sorting_Visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
