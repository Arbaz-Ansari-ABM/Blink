import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function PageFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link to="/" className="brand">
              <img
                src={logo}
                alt=""
                className="brand-logo"
                width="28"
                height="28"
                loading="lazy"
                decoding="async"
              />
              blink
            </Link>
            <div className="footer-statement">
              A little pause for brighter days.<br />
              Better habits, happier eyes.
            </div>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <strong>Explore</strong>
              <Link to="/#product">Product</Link>
              <Link to="/#rhythm">How it works</Link>
              <a href="https://github.com/Arbaz-Ansari-ABM" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
            <div className="footer-col">
              <strong>Elsewhere</strong>
              <Link to="/#download">Instagram</Link>
              <Link to="/#download">X</Link>
              <a href="mailto:arbazahmadansari03@gmail.com?subject=Blink%20Support">
                Contact Us
              </a>
            </div>
            <div className="footer-col">
              <strong>Fine print</strong>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Blink Eye Comfort</span>
          <span>
            Designed for a kinder screen day <span aria-hidden="true">✦</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
