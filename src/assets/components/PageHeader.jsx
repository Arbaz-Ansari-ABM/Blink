import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../logo.png';

export default function PageHeader({ currentTitle }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Blink home">
<<<<<<< HEAD
          <img src={logo} alt="" className="brand-logo" width="28" height="28" />
=======
          <img
            src={logo}
            alt=""
            className="brand-logo"
            width="28"
            height="28"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
>>>>>>> 8a7110d (Initial commit: Blink website - eye comfort utility landing page)
          blink
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {currentTitle && (
            <span
              className="subpage-nav-badge"
              style={{ margin: 0, display: 'inline-flex' }}
            >
              Legal / {currentTitle}
            </span>
          )}
          <Link to="/" className="back-btn" aria-label="Back to home page">
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}
