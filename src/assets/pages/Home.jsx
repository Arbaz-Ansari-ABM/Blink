import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { Eye } from 'lucide-react';

export default function Home() {
  const year = new Date().getFullYear();

  const [showJournal, setShowJournal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showSound, setShowSound] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveals.forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    } else {
      reveals.forEach((item) => item.classList.add('visible'));
    }
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true"></div>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link to="/" className="brand" aria-label="Blink home">
            <img src={logo} alt="" className="brand-logo" width="28" height="28" />
            blink
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#product">Product</a>
            <a href="#rhythm">How it works</a>
            <a className="nav-cta" href="#download">
              Download free <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero" id="product">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">A softer way to stay on screen</div>
              <h1>
                Your eyes deserve a <em>better rhythm.</em>
              </h1>
              <p className="lede">
                Blink brings a little more intention to your screen time — with gentle prompts to look away, breathe, and come back clearer.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#app-download">
                  Get the app <span className="arrow" aria-hidden="true">↗</span>
                </a>
                <a
                  className="btn btn-secondary"
                  href="/Download/blink-extension.zip"
                  download="blink-extension.zip"
                >
                  Add the extension <span className="arrow" aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="trust">
                <span className="trust-dot"></span> Quiet by design · no accounts · yours to tune
              </div>
            </div>
            <div className="orbit-stage reveal" aria-label="Blink app preview">
              <div className="orbit one" aria-hidden="true"></div>
              <div className="orbit two" aria-hidden="true"></div>
              <div className="orbit three" aria-hidden="true"></div>
              <div className="browser">
                <div className="browser-top">
                  <i></i>
                  <i></i>
                  <i></i>
                  <div className="address">blink / your rhythm</div>
                </div>
                <div className="browser-body">
                  <div className="mini-kicker">A small pause, right on time</div>
                  <div className="browser-title">Look a little further.</div>
                  <div className="browser-copy">
                    Every 20 minutes, Blink gives your eyes somewhere else to be.
                  </div>
                  <div className="browser-line"></div>
                  <div className="pause-chip">
                    <strong>20 : 00</strong>
                    <span>next pause in focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {!showJournal && !showHelp && !showSound && (
          <section className="purpose-section" aria-labelledby="purpose-title">
            <div className="purpose-visual" aria-hidden="true">
              <div className="purpose-orbit purpose-orbit-outer" />
              <div className="purpose-orbit purpose-orbit-middle" />
              <div className="purpose-orbit purpose-orbit-inner" />
              <div className="purpose-spark purpose-spark-top" />
              <div className="purpose-spark purpose-spark-side" />
              <div className="purpose-eye"><Eye size={42} strokeWidth={1.4} /></div>
              <div className="purpose-distance">20 · 20 · 20</div>
              <span className="purpose-caption">a softer way<br />to look away</span>
            </div>
            <div className="purpose-copy">
              <p className="eyebrow">Built with purpose <span>/</span> for the long haul</p>
              <h2 id="purpose-title">A gentler rhythm<br /><em>for the work that matters.</em></h2>
              <p className="purpose-lede">Blink was made to turn the 20-20-20 rule into a calm, repeatable habit — one that protects your attention and gives your eyes room to recover without breaking your flow.</p>
              <ol className="purpose-principles">
                <li><span className="purpose-number">01</span><span><strong>Notice the moment</strong><small>A quiet cue arrives before strain has to.</small></span></li>
                <li><span className="purpose-number">02</span><span><strong>Look further</strong><small>Let your gaze travel beyond the near field.</small></span></li>
                <li><span className="purpose-number">03</span><span><strong>Return refreshed</strong><small>Come back with a little more ease.</small></span></li>
              </ol>
              <p className="purpose-trust"><span aria-hidden="true">✦</span> Your rhythm stays on this device</p>
            </div>
          </section>
        )}

        <section className="story section" id="rhythm">
          <div className="wrap story-grid reveal">
            <div>
              <div className="eyebrow">The 20 / 20 / 20 rhythm</div>
              <h2>Small pauses. Noticeable difference.</h2>
              <p className="story-intro">
                The simplest way to care for your eyes is to give them a change of distance. Blink makes that easy to remember — and easy to keep.
              </p>
            </div>
            <div>
              <div className="twenties" aria-label="20 20 20">
                <span>20</span>
                <span>/20</span>
                <span>/20</span>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-num">01</div>
                  <h3>Every 20 minutes</h3>
                  <p>A quiet nudge arrives before your focus gets brittle.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-num">02</div>
                  <h3>Look 20 feet away</h3>
                  <p>Let the near-work soften. Find a window, a wall, a tree.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-num">03</div>
                  <h3>For 20 seconds</h3>
                  <p>Long enough to reset, short enough to keep your flow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features section" aria-labelledby="feature-title">
          <div className="wrap">
            <div className="features-head reveal">
              <div>
                <div className="eyebrow">Two ways to blink</div>
                <h2 id="feature-title">Fits the way you work.</h2>
              </div>
              <p className="features-note">
                No noisy badges. No guilt. Just a little room for your eyes inside the day.
              </p>
            </div>
            <div className="feature-grid">
              <article className="feature-card reveal">
                <div className="feature-label">01 / MOBILE APP</div>
                <h3>A gentle rhythm in the background.</h3>
                <p>
                  Set your pace, choose your sound, and let the rest timer keep the day moving without pulling you out of it.
                </p>
                <div className="ui-window" aria-hidden="true">
                  <div className="ui-row">
                    <b>Focus rhythm</b>
                    <span>20 min</span>
                  </div>
                  <div className="ui-row">
                    <b>Soft chime</b>
                    <span className="toggle"></span>
                  </div>
                  <div className="ui-row">
                    <b>Long pause</b>
                    <span>5 min</span>
                  </div>
                </div>
              </article>
              <article className="feature-card reveal">
                <div className="feature-label">02 / BROWSER EXTENSION</div>
                <h3>Keep the web in perspective.</h3>
                <p>
                  A calm, in-page prompt that catches you between tabs and gives your eyes a reason to wander.
                </p>
                <div className="extension-ui" aria-hidden="true">
                  <div className="circle">04:18</div>
                  <p>
                    Time to look up
                    <br />
                    <small style={{ color: '#78978f' }}>your eyes will thank you</small>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="download" id="download" aria-labelledby="download-title">
          <div className="wrap reveal">
            <div className="eyebrow">Make space for a pause</div>
            <h2 id="download-title">Start with the version that feels like you.</h2>
            <p className="download-intro">
              Blink is free to try, private by default, and made to disappear into the edges of your day.
            </p>
            <div className="download-grid">
              <a className="download-card" id="app-download" href="#app-download">
                <div>
                  <div className="download-icon">◒</div>
                  <h3>Get the Mobile app</h3>
                  <p>Android 10+</p>
                </div>
                <span className="download-link" aria-label="Download desktop app">
                  ↗
                </span>
              </a>
              <a
                className="download-card"
                id="extension-download"
                href="/Download/blink-extension.zip"
                download="blink-extension.zip"
              >
                <div>
                  <div className="download-icon">◌</div>
                  <h3>Add the extension</h3>
                  <p>Chrome · Firefox · Safari</p>
                </div>
                <span className="download-link" aria-label="Add browser extension">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div>
              <Link to="/" className="brand">
                <img src={logo} alt="" className="brand-logo" width="28" height="28" />
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
                <a href="#product">Product</a>
                <a href="#rhythm">How it works</a>
                <a href="https://github.com/Arbaz-Ansari-ABM" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
              <div className="footer-col">
                <strong>Elsewhere</strong>
                <a href="#download">Instagram</a>
                <a href="#download">X</a>
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
    </>
  );
}
