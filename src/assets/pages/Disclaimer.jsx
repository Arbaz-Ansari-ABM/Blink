import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import {
  HeartPulse,
  Smartphone,
  Globe,
  AlertTriangle,
  Eye,
  Calendar,
  Clock,
  Compass,
  CheckCircle2,
  Activity,
  Info
} from 'lucide-react';

export default function Disclaimer() {
  const [activeSection, setActiveSection] = useState('sec-1');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = ['sec-1', 'sec-2', 'sec-3', 'sec-4', 'sec-5', 'sec-6'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 80) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="legal-page">
      <div className="grain" aria-hidden="true"></div>
      <PageHeader currentTitle="Disclaimer" />

      {/* Editorial Meta Header */}
      <section className="legal-header-meta">
        <div className="wrap">
          <div className="legal-meta-row">
            <div className="legal-doc-id">
              <HeartPulse size={14} color="var(--coral)" />
              Document Reference: BLK-DISC-2026.V2
            </div>
            <div className="legal-platform-tags">
              <span className="platform-pill mobile">
                <Smartphone size={12} /> Handheld Mobile Ergonomics
              </span>
              <span className="platform-pill extension">
                <Globe size={12} /> Desktop Screen Workstations
              </span>
            </div>
          </div>

          <div className="legal-title-wrap">
            <h1 className="legal-title">
              Health & Usage Disclaimer for <em>Mobile & Desktop</em>
            </h1>
            <p className="legal-lead">
              Blink provides pacing tools inspired by optometric wellness practices like the 20-20-20 rule. This document defines the boundaries between digital ergonomic assistance and clinical medical care across mobile and desktop environments.
            </p>
          </div>

          <div className="legal-meta-footer">
            <span className="legal-meta-item">
              <Calendar size={13} /> Last Clinical Review: November 11, 2026
            </span>
            <span className="legal-meta-item">
              <Clock size={13} /> Estimated Reading Time: ~3.5 minutes
            </span>
            <span className="legal-meta-item">
              <Activity size={13} /> Classification: Non-Medical Ergonomic Utility
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="wrap legal-content-wrap">
        <div className="legal-grid">
          {/* Table of Contents */}
          <aside className="legal-toc" aria-label="Disclaimer table of contents">
            <div className="legal-toc-title">Disclaimer Index</div>
            <ul className="legal-toc-list">
              <li>
                <a
                  href="#sec-1"
                  className={`legal-toc-link ${activeSection === 'sec-1' ? 'active' : ''}`}
                >
                  § 1.0 Non-Medical Software Notice
                </a>
              </li>
              <li>
                <a
                  href="#sec-2"
                  className={`legal-toc-link ${activeSection === 'sec-2' ? 'active' : ''}`}
                >
                  § 2.0 Mobile Screen Strain Factors
                </a>
              </li>
              <li>
                <a
                  href="#sec-3"
                  className={`legal-toc-link ${activeSection === 'sec-3' ? 'active' : ''}`}
                >
                  § 3.0 Desktop & Dual-Monitor Strain
                </a>
              </li>
              <li>
                <a
                  href="#sec-4"
                  className={`legal-toc-link ${activeSection === 'sec-4' ? 'active' : ''}`}
                >
                  § 4.0 The 20-20-20 Optometric Rule
                </a>
              </li>
              <li>
                <a
                  href="#sec-5"
                  className={`legal-toc-link ${activeSection === 'sec-5' ? 'active' : ''}`}
                >
                  § 5.0 Acute Ocular Red Flags
                </a>
              </li>
              <li>
                <a
                  href="#sec-6"
                  className={`legal-toc-link ${activeSection === 'sec-6' ? 'active' : ''}`}
                >
                  § 6.0 Environmental Best Practices
                </a>
              </li>
            </ul>
          </aside>

          {/* Detailed Legal Text */}
          <main className="legal-main">
            {/* Section 1 */}
            <article id="sec-1" className="legal-section">
              <div className="legal-section-tag">§ 1.0 MEDICAL STATUS</div>
              <h2 className="legal-section-heading">1. Not a Medical Device or Clinical Treatment</h2>
              <p className="legal-text">
                The <strong>Blink Mobile Application</strong> and <strong>Blink Desktop Browser Extension</strong> are behavioral reminder tools and ergonomic aids. <strong>Blink is not a medical device</strong> and has not been certified, evaluated, or approved by the United States Food and Drug Administration (FDA), the European Medicines Agency (EMA), or any other medical regulatory authority.
              </p>
              <p className="legal-text">
                Blink is not designed, marketed, or intended to diagnose, treat, mitigate, or cure:
              </p>
              <ul className="legal-list">
                <li>Asthenopia (clinical digital eye fatigue) or Chronic Dry Eye Disease (DED).</li>
                <li>Refractive errors including myopia (nearsightedness), hyperopia, or astigmatism.</li>
                <li>Binocular vision dysfunctions, strabismus, convergence insufficiency, or amblyopia.</li>
                <li>Glaucoma, macular degeneration, cataracts, or retinal disorders.</li>
              </ul>
              <div className="legal-callout coral">
                <AlertTriangle size={18} className="callout-icon" />
                <div>
                  <strong>No Doctor-Patient Relationship:</strong> Using Blink does not constitute medical consultation, diagnosis, or optometric advice. Always consult an optometrist (OD) or ophthalmologist (MD) for eye exams and persistent vision issues.
                </div>
              </div>
            </article>

            {/* Section 2 */}
            <article id="sec-2" className="legal-section">
              <div className="legal-section-tag">§ 2.0 MOBILE ERGONOMICS</div>
              <h2 className="legal-section-heading">2. Mobile Phone Screen Strain Context</h2>
              <p className="legal-text">
                Eye fatigue experienced on handheld mobile devices differs fundamentally from desktop computer workstations:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Hyper-Close Viewing Distances:</strong> People routinely hold smartphones between 8 to 12 inches (20 to 30 cm) from their face. This severe proximity forces the eye's ciliary accommodation muscles and medial rectus muscles to contract continuously.
                </li>
                <li>
                  <strong>Dark Room Screen Use:</strong> Reading on a mobile phone in a pitch-dark room causes extreme pupil dilation disparities, increasing glare sensitivity and ocular fatigue.
                </li>
                <li>
                  <strong>Posture and Cervical Tension:</strong> "Tech neck" (looking down at a phone held near the chest) restricts blood flow to ocular muscles and frequently triggers cervicogenic headaches mistakenly attributed solely to eye strain.
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article id="sec-3" className="legal-section">
              <div className="legal-section-tag">§ 3.0 DESKTOP WORKSTATIONS</div>
              <h2 className="legal-section-heading">3. Desktop & Multi-Monitor Workstation Strain</h2>
              <p className="legal-text">
                For developers, designers, writers, and knowledge workers running the Blink browser extension across dual or ultra-wide displays:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Drastic Blink Rate Reduction:</strong> Clinical studies indicate that during intense computer screen work, the average human blink rate drops from 18–20 blinks per minute to merely 5–7 blinks per minute.
                </li>
                <li>
                  <strong>Incomplete Blinking:</strong> Up to 60% of blinks performed while reading desktop code or documents are "partial blinks," leaving the lower third of the cornea uncovered and accelerating tear film evaporation.
                </li>
                <li>
                  <strong>Air Conditioning & HVAC Drafts:</strong> Office ventilation directed toward workstation monitors strips the lipid layer of the tear film, exacerbating grittiness and burning sensations.
                </li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="sec-4" className="legal-section">
              <div className="legal-section-tag">§ 4.0 THE 20-20-20 RULE</div>
              <h2 className="legal-section-heading">4. Optometric Science Behind the 20-20-20 Rule</h2>
              <p className="legal-text">
                Blink is structured around the 20-20-20 rule, a recognized preventive framework popularized by optometrist Dr. Jeffrey Anshel and endorsed by the American Academy of Ophthalmology (AAO):
              </p>

              <div className="platform-spec-grid">
                <div className="spec-card mobile">
                  <div className="spec-header">
                    <span className="spec-title">
                      <Clock size={16} color="var(--mint)" /> Every 20 Minutes
                    </span>
                    <span className="spec-badge">Cadence</span>
                  </div>
                  <p className="legal-text" style={{ margin: 0, fontSize: '13px' }}>
                    Interrupts constant muscular accommodation before focal spasm and tension headaches set in.
                  </p>
                </div>

                <div className="spec-card extension">
                  <div className="spec-header">
                    <span className="spec-title">
                      <Compass size={16} color="var(--apricot)" /> 20 Feet / 6 Meters
                    </span>
                    <span className="spec-badge">Focal Depth</span>
                  </div>
                  <p className="legal-text" style={{ margin: 0, fontSize: '13px' }}>
                    At 20 feet, light rays enter the eye virtually parallel, allowing ciliary muscles to fully relax into optical infinity.
                  </p>
                </div>
              </div>

              <div className="legal-callout mint">
                <CheckCircle2 size={18} className="callout-icon" />
                <div>
                  <strong>The 20-Second Complete Blink:</strong> During the 20-second pause, blink deliberately 3 to 4 times with full lid closure to activate the meibomian glands along the eyelid margin and replenish your natural tear film.
                </div>
              </div>
            </article>

            {/* Section 5 */}
            <article id="sec-5" className="legal-section">
              <div className="legal-section-tag">§ 5.0 RED FLAG SYMPTOMS</div>
              <h2 className="legal-section-heading">5. Critical Symptoms Requiring Immediate Medical Care</h2>
              <p className="legal-text">
                Blink is designed only for routine screen fatigue. If you experience any of the following symptoms, <strong>immediately stop using the screen</strong> and visit an urgent ophthalmologist or emergency room:
              </p>
              <ul className="legal-list">
                <li>Sudden, unprovoked loss or darkening of vision in one or both eyes.</li>
                <li>New appearance of showers of black spots (floaters) accompanied by bright light flashes (photopsia).</li>
                <li>A gray or black "curtain" or shadow encroaching across your peripheral visual field.</li>
                <li>Severe, deep, throbbing eye pain with nausea or colored rainbow halos around light bulbs.</li>
                <li>Sudden, unresolving double vision (diplopia).</li>
              </ul>
            </article>

            {/* Section 6 */}
            <article id="sec-6" className="legal-section">
              <div className="legal-section-tag">§ 6.0 HOLISTIC ERGONOMICS</div>
              <h2 className="legal-section-heading">6. Holistic Environmental Recommendations</h2>
              <p className="legal-text">
                Software timers work best when combined with healthy physical ergonomics:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Monitor Alignment:</strong> Position your desktop monitor 20 to 26 inches (arm's length) from your eyes, with the top of the monitor glass positioned at or slightly below eye level.
                </li>
                <li>
                  <strong>Ambient Lighting Match:</strong> Adjust your display brightness so that a blank white page on your screen appears roughly equal in luminance to a white sheet of paper held next to it in the room.
                </li>
                <li>
                  <strong>Prescription Verification:</strong> If you find yourself leaning forward or squinting even with regular breaks, have an optometrist check if you need dedicated computer task lenses or updated astigmatism correction.
                </li>
              </ul>

              <div className="legal-signoff">
                <div className="signoff-info">
                  <h4>Clinical Feedback & Scientific References</h4>
                  <p>
                    For references to optometric literature or suggestions from certified healthcare professionals:
                  </p>
                </div>
                <a
                  href="mailto:arbazahmadansari03@gmail.com?subject=Blink%20Ergonomics%20Feedback"
                  className="btn btn-primary"
                >
                  Contact Ergonomics Lead <span className="arrow">↗</span>
                </a>
              </div>
            </article>
          </main>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
