import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import {
  Shield,
  Smartphone,
  Globe,
  Lock,
  CheckCircle2,
  HardDrive,
  Info,
  Calendar,
  Clock,
  Mail,
  EyeOff
} from 'lucide-react';

export default function Policy() {
  const [activeSection, setActiveSection] = useState('sec-1');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = ['sec-1', 'sec-2', 'sec-3', 'sec-4', 'sec-5', 'sec-6', 'sec-7'];
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
      <PageHeader currentTitle="Privacy Policy" />

      {/* Editorial Meta Header */}
      <section className="legal-header-meta">
        <div className="wrap">
          <div className="legal-meta-row">
            <div className="legal-doc-id">
              <Shield size={14} color="var(--mint)" />
              Document Reference: BLK-PRIV-2026.V2
            </div>
            <div className="legal-platform-tags">
              <span className="platform-pill mobile">
                <Smartphone size={12} /> Android App (10+)
              </span>
              <span className="platform-pill extension">
                <Globe size={12} /> Extension (Chrome · Firefox · Safari)
              </span>
            </div>
          </div>

          <div className="legal-title-wrap">
            <h1 className="legal-title">
              Privacy Policy for <em>Mobile & Browser Extension</em>
            </h1>
            <p className="legal-lead">
              Blink is designed as a calm, offline-first eye comfort utility. This document outlines exactly how data is handled across both our native Android mobile application and our desktop browser extension.
            </p>
          </div>

          <div className="legal-meta-footer">
            <span className="legal-meta-item">
              <Calendar size={13} /> Effective Date: November 11, 2026
            </span>
            <span className="legal-meta-item">
              <Clock size={13} /> Estimated Reading Time: ~3 minutes
            </span>
            <span className="legal-meta-item">
              <Lock size={13} /> Architecture: 100% Client-Side / Zero Telemetry
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="wrap legal-content-wrap">
        <div className="legal-grid">
          {/* Table of Contents */}
          <aside className="legal-toc" aria-label="Legal table of contents">
            <div className="legal-toc-title">Table of Contents</div>
            <ul className="legal-toc-list">
              <li>
                <a
                  href="#sec-1"
                  className={`legal-toc-link ${activeSection === 'sec-1' ? 'active' : ''}`}
                >
                  § 1.0 Scope & Architecture
                </a>
              </li>
              <li>
                <a
                  href="#sec-2"
                  className={`legal-toc-link ${activeSection === 'sec-2' ? 'active' : ''}`}
                >
                  § 2.0 Mobile App Data Handling
                </a>
              </li>
              <li>
                <a
                  href="#sec-3"
                  className={`legal-toc-link ${activeSection === 'sec-3' ? 'active' : ''}`}
                >
                  § 3.0 Browser Extension Data
                </a>
              </li>
              <li>
                <a
                  href="#sec-4"
                  className={`legal-toc-link ${activeSection === 'sec-4' ? 'active' : ''}`}
                >
                  § 4.0 Platform Permissions Table
                </a>
              </li>
              <li>
                <a
                  href="#sec-5"
                  className={`legal-toc-link ${activeSection === 'sec-5' ? 'active' : ''}`}
                >
                  § 5.0 Third-Party SDKs & Analytics
                </a>
              </li>
              <li>
                <a
                  href="#sec-6"
                  className={`legal-toc-link ${activeSection === 'sec-6' ? 'active' : ''}`}
                >
                  § 6.0 Data Storage & Deletion
                </a>
              </li>
              <li>
                <a
                  href="#sec-7"
                  className={`legal-toc-link ${activeSection === 'sec-7' ? 'active' : ''}`}
                >
                  § 7.0 Contact & Verification
                </a>
              </li>
            </ul>
          </aside>

          {/* Detailed Legal Text */}
          <main className="legal-main">
            {/* Section 1 */}
            <article id="sec-1" className="legal-section">
              <div className="legal-section-tag">§ 1.0 SCOPE & PRINCIPLES</div>
              <h2 className="legal-section-heading">1. Purpose and Dual-Platform Scope</h2>
              <p className="legal-text">
                This Privacy Policy applies equally to the <strong>Blink Mobile Application for Android</strong> and the <strong>Blink Browser Extension</strong> for Chromium-based browsers (Google Chrome, Brave, Microsoft Edge), Mozilla Firefox, and Apple Safari.
              </p>
              <p className="legal-text">
                Our core architectural principle is simple: <strong>health reminders belong on your device</strong>. Blink does not maintain user accounts, does not operate backend database servers to store user habits, and does not sell or share any information with third-party advertisers.
              </p>

              {/* Side-by-side Platform Architecture Cards */}
              <div className="platform-spec-grid">
                <div className="spec-card mobile">
                  <div className="spec-header">
                    <span className="spec-title">
                      <Smartphone size={16} color="var(--mint)" /> Mobile App (Android)
                    </span>
                    <span className="spec-badge">Android 10+</span>
                  </div>
                  <ul className="spec-list">
                    <li>Operates fully offline without internet permission</li>
                    <li>Schedules breaks via native Android AlarmManager</li>
                    <li>Audio chimes played through local sound resources</li>
                    <li>Settings stored in private app SharedPreferences</li>
                  </ul>
                </div>

                <div className="spec-card extension">
                  <div className="spec-header">
                    <span className="spec-title">
                      <Globe size={16} color="var(--apricot)" /> Browser Extension
                    </span>
                    <span className="spec-badge">Manifest V3</span>
                  </div>
                  <ul className="spec-list">
                    <li>Zero background network requests or tracking pixels</li>
                    <li>Runs background timer via chrome.alarms API</li>
                    <li>Shows local non-intrusive notification banners</li>
                    <li>Interval preferences kept in chrome.storage.local</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 2 */}
            <article id="sec-2" className="legal-section">
              <div className="legal-section-tag">§ 2.0 MOBILE APPLICATION</div>
              <h2 className="legal-section-heading">2. Mobile App (Android) Data Practices</h2>
              <p className="legal-text">
                When you install and use the Blink Android APK or store package, your phone's personal data remains entirely untouched:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>No Account Credentials:</strong> You do not need to register with an email address, phone number, Google account, or social login.
                </li>
                <li>
                  <strong>No Device Fingerprints or Hardware IDs:</strong> Blink does not read your IMEI, MAC address, advertising ID (GAID), or cellular network identity.
                </li>
                <li>
                  <strong>No Sensor or Location Access:</strong> We never request GPS location, microphone input, camera feed, or physical activity sensors.
                </li>
                <li>
                  <strong>No Contacts or Photos Access:</strong> The app does not request read or write permissions for external storage, photo galleries, or contacts.
                </li>
              </ul>
              <div className="legal-callout mint">
                <Info size={18} className="callout-icon" />
                <div>
                  <strong>Offline Verification:</strong> You can run the Blink mobile application in complete Airplane Mode with mobile data and Wi-Fi disabled. All timer features, chime sounds, and break cycles will continue to work without error.
                </div>
              </div>
            </article>

            {/* Section 3 */}
            <article id="sec-3" className="legal-section">
              <div className="legal-section-tag">§ 3.0 BROWSER EXTENSION</div>
              <h2 className="legal-section-heading">3. Browser Extension Data Practices</h2>
              <p className="legal-text">
                Browser extensions possess unique technical capabilities in modern browsers. Here is our explicit commitment regarding the desktop extension:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>No Browsing History Recording:</strong> Blink does not record the URLs you visit, the tabs you keep open, or the search queries you perform.
                </li>
                <li>
                  <strong>No In-Page Content Scanning:</strong> We do not inject persistent content scripts to analyze page text, passwords, shopping carts, or banking portals.
                </li>
                <li>
                  <strong>No Keystroke Logging:</strong> Blink has zero keyboard event listeners and cannot inspect form inputs.
                </li>
                <li>
                  <strong>Clean Local State:</strong> Timer durations (e.g. 20-minute cycle, 5-minute long pause) and audio toggles are saved exclusively in your browser profile's isolated <code>chrome.storage.local</code> area.
                </li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="sec-4" className="legal-section">
              <div className="legal-section-tag">§ 4.0 PERMISSIONS TABLE</div>
              <h2 className="legal-section-heading">4. Technical Permissions & Exact Rationale</h2>
              <p className="legal-text">
                Both modern Android and modern browsers require developers to declare capabilities in their manifest files. Here is the full disclosure for both platforms:
              </p>

              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Permission Name</th>
                      <th>Purpose & Scope</th>
                      <th>Network Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mobile (Android)</td>
                      <td><code>POST_NOTIFICATIONS</code></td>
                      <td>Required on Android 13+ to display break prompts when rest timer elapses.</td>
                      <td>None (Local)</td>
                    </tr>
                    <tr>
                      <td>Mobile (Android)</td>
                      <td><code>SCHEDULE_EXACT_ALARM</code></td>
                      <td>Wakes the timer at precise 20-minute intervals without background battery drain.</td>
                      <td>None (Local)</td>
                    </tr>
                    <tr>
                      <td>Mobile (Android)</td>
                      <td><code>RECEIVE_BOOT_COMPLETED</code></td>
                      <td>Restores your chosen rest schedule automatically if phone restarts.</td>
                      <td>None (Local)</td>
                    </tr>
                    <tr>
                      <td>Browser Extension</td>
                      <td><code>storage</code></td>
                      <td>Saves user preferences (sound on/off, custom break cadence) locally.</td>
                      <td>None (Local)</td>
                    </tr>
                    <tr>
                      <td>Browser Extension</td>
                      <td><code>alarms</code></td>
                      <td>Runs the 20-minute countdown in the background service worker (Manifest V3).</td>
                      <td>None (Local)</td>
                    </tr>
                    <tr>
                      <td>Browser Extension</td>
                      <td><code>notifications</code></td>
                      <td>Displays the desktop rest prompt when the countdown completes.</td>
                      <td>None (Local)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 5 */}
            <article id="sec-5" className="legal-section">
              <div className="legal-section-tag">§ 5.0 THIRD-PARTY SERVICES</div>
              <h2 className="legal-section-heading">5. Third-Party Analytics, Trackers & SDKs</h2>
              <p className="legal-text">
                We do not embed Google Analytics, Firebase Analytics, Meta Pixel, Adjust, AppsFlyer, Sentry, Mixpanel, or any ad-exchange mediation SDKs into the Blink Mobile APK or Extension.
              </p>
              <p className="legal-text">
                When you download the extension zip or visit this documentation website, standard static HTTP delivery is managed through GitHub / edge servers without cross-site tracking cookies.
              </p>
            </article>

            {/* Section 6 */}
            <article id="sec-6" className="legal-section">
              <div className="legal-section-tag">§ 6.0 DATA RETENTION & REMOVAL</div>
              <h2 className="legal-section-heading">6. Data Storage, Export & Deletion</h2>
              <p className="legal-text">
                Because Blink does not operate a user database, we do not store your data on remote servers. Consequently, deleting your data is instantaneous and under your complete control:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>On Android Mobile:</strong> Go to <em>Settings → Apps → Blink → Clear Data</em>, or simply uninstall the application. 100% of stored preferences are purged from device storage immediately.
                </li>
                <li>
                  <strong>On Browser Extension:</strong> Right-click the Blink icon in your browser toolbar and select <em>Remove from Browser</em>. Your browser will automatically erase the local storage database associated with the extension.
                </li>
              </ul>
            </article>

            {/* Section 7 */}
            <article id="sec-7" className="legal-section">
              <div className="legal-section-tag">§ 7.0 COMPLIANCE & CONTACT</div>
              <h2 className="legal-section-heading">7. Open Source Verification & Contact</h2>
              <p className="legal-text">
                We believe security and privacy are best verified through open code rather than marketing statements. The source code for both the mobile companion and browser extension is inspectable on our public GitHub repository.
              </p>

              <div className="legal-signoff">
                <div className="signoff-info">
                  <h4>Developer & Privacy Point of Contact</h4>
                  <p>
                    For questions regarding software permissions, source verification, or privacy inquiries:
                  </p>
                </div>
                <a
                  href="mailto:arbazahmadansari03@gmail.com?subject=Blink%20Privacy%20Question"
                  className="btn btn-primary"
                >
                  Contact Privacy Lead <span className="arrow">↗</span>
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
