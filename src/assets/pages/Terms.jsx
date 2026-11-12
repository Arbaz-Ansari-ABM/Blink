import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import {
  Scale,
  Smartphone,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Clock,
  Shield,
  Laptop
} from 'lucide-react';

export default function Terms() {
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
      <PageHeader currentTitle="Terms of Service" />

      {/* Editorial Meta Header */}
      <section className="legal-header-meta">
        <div className="wrap">
          <div className="legal-meta-row">
            <div className="legal-doc-id">
              <Scale size={14} color="var(--apricot)" />
              Document Reference: BLK-TOS-2026.V2
            </div>
            <div className="legal-platform-tags">
              <span className="platform-pill mobile">
                <Smartphone size={12} /> Android APK & Distribution
              </span>
              <span className="platform-pill extension">
                <Globe size={12} /> Browser Extension (MV3)
              </span>
            </div>
          </div>

          <div className="legal-title-wrap">
            <h1 className="legal-title">
              Terms of Service for <em>Blink Mobile & Extension</em>
            </h1>
            <p className="legal-lead">
              These terms govern your installation, access, and use of the Blink Android Mobile Application, the Blink Desktop Browser Extension, and our web portal. Please read them clearly before installation.
            </p>
          </div>

          <div className="legal-meta-footer">
            <span className="legal-meta-item">
              <Calendar size={13} /> Effective Date: November 11, 2026
            </span>
            <span className="legal-meta-item">
              <Clock size={13} /> Estimated Reading Time: ~3.5 minutes
            </span>
            <span className="legal-meta-item">
              <Scale size={13} /> Governing Standard: Open Fair-Use License
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="wrap legal-content-wrap">
        <div className="legal-grid">
          {/* Table of Contents */}
          <aside className="legal-toc" aria-label="Terms table of contents">
            <div className="legal-toc-title">Terms Index</div>
            <ul className="legal-toc-list">
              <li>
                <a
                  href="#sec-1"
                  className={`legal-toc-link ${activeSection === 'sec-1' ? 'active' : ''}`}
                >
                  § 1.0 Acceptance & Applicability
                </a>
              </li>
              <li>
                <a
                  href="#sec-2"
                  className={`legal-toc-link ${activeSection === 'sec-2' ? 'active' : ''}`}
                >
                  § 2.0 License Grants & Permitted Use
                </a>
              </li>
              <li>
                <a
                  href="#sec-3"
                  className={`legal-toc-link ${activeSection === 'sec-3' ? 'active' : ''}`}
                >
                  § 3.0 Mobile Platform Specifics
                </a>
              </li>
              <li>
                <a
                  href="#sec-4"
                  className={`legal-toc-link ${activeSection === 'sec-4' ? 'active' : ''}`}
                >
                  § 4.0 Browser Extension Specifics
                </a>
              </li>
              <li>
                <a
                  href="#sec-5"
                  className={`legal-toc-link ${activeSection === 'sec-5' ? 'active' : ''}`}
                >
                  § 5.0 Intellectual Property & Integrity
                </a>
              </li>
              <li>
                <a
                  href="#sec-6"
                  className={`legal-toc-link ${activeSection === 'sec-6' ? 'active' : ''}`}
                >
                  § 6.0 Warranty Disclaimer & Liability
                </a>
              </li>
              <li>
                <a
                  href="#sec-7"
                  className={`legal-toc-link ${activeSection === 'sec-7' ? 'active' : ''}`}
                >
                  § 7.0 Termination & Modifications
                </a>
              </li>
            </ul>
          </aside>

          {/* Detailed Legal Text */}
          <main className="legal-main">
            {/* Section 1 */}
            <article id="sec-1" className="legal-section">
              <div className="legal-section-tag">§ 1.0 AGREEMENT OVERVIEW</div>
              <h2 className="legal-section-heading">1. Acceptance & Dual-Platform Applicability</h2>
              <p className="legal-text">
                By downloading, sideloading, installing, or executing either the <strong>Blink Mobile Application (for Android)</strong> or the <strong>Blink Browser Extension</strong>, you enter into a legally binding agreement with the developers of Blink under the terms outlined herein.
              </p>
              <p className="legal-text">
                If you do not agree with these terms, you must discontinue use and immediately uninstall the application from your mobile device and remove the extension from your desktop browser.
              </p>
            </article>

            {/* Section 2 */}
            <article id="sec-2" className="legal-section">
              <div className="legal-section-tag">§ 2.0 GRANT OF LICENSE</div>
              <h2 className="legal-section-heading">2. License Grants & Permitted Usage</h2>
              <p className="legal-text">
                We grant you a worldwide, non-exclusive, non-transferable, royalty-free license to use Blink under the following conditions:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Personal & Commercial Workspaces:</strong> You may use Blink for individual relaxation or on corporate workstations, office laptops, and shared development machines to manage screen time during work hours.
                </li>
                <li>
                  <strong>Unlimited Devices:</strong> There is no licensing tier, seat limit, or device limit. You may install the mobile app on multiple phones or tablets and the extension across all supported browsers.
                </li>
                <li>
                  <strong>No Subscription Gate:</strong> Core eye-break timers, interval customization, audio chimes, and offline capabilities are provided without recurring fee obligations.
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article id="sec-3" className="legal-section">
              <div className="legal-section-tag">§ 3.0 MOBILE APPLICATION (ANDROID)</div>
              <h2 className="legal-section-heading">3. Terms Specific to the Mobile Application</h2>
              <div className="spec-card mobile" style={{ marginBottom: '20px' }}>
                <div className="spec-header">
                  <span className="spec-title">
                    <Smartphone size={16} color="var(--mint)" /> Mobile APK & OS Requirements
                  </span>
                  <span className="spec-badge">Android 10 (API 29) or Higher</span>
                </div>
                <p className="legal-text" style={{ margin: 0, fontSize: '13px' }}>
                  The mobile build utilizes background rest timing. Device manufacturers enforce aggressive battery management policies (Doze mode, battery saver) that may vary across brands.
                </p>
              </div>

              <ul className="legal-list">
                <li>
                  <strong>Sideloading & Official Distribution:</strong> When downloading the Blink APK from official releases, you are responsible for ensuring your Android device settings allow installation from trusted developer sources.
                </li>
                <li>
                  <strong>Battery Management Whitelisting:</strong> For precise 20-minute reminders when your screen is locked, you may configure battery optimization exclusions. Blink does not run persistent background telemetry or battery-draining polling tasks.
                </li>
                <li>
                  <strong>System Audio & Chimes:</strong> Audio cues utilize local sound resources. The volume output is governed by your Android device's media volume controls.
                </li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="sec-4" className="legal-section">
              <div className="legal-section-tag">§ 4.0 BROWSER EXTENSION</div>
              <h2 className="legal-section-heading">4. Terms Specific to the Browser Extension</h2>
              <div className="spec-card extension" style={{ marginBottom: '20px' }}>
                <div className="spec-header">
                  <span className="spec-title">
                    <Globe size={16} color="var(--apricot)" /> Browser Environment
                  </span>
                  <span className="spec-badge">Chrome · Firefox · Safari · Edge · Brave</span>
                </div>
                <p className="legal-text" style={{ margin: 0, fontSize: '13px' }}>
                  Constructed under modern Manifest V3 standards to ensure memory efficiency and complete containment within your browser profile.
                </p>
              </div>

              <ul className="legal-list">
                <li>
                  <strong>Browser Compatibility:</strong> While we target standard WebExtensions APIs, browser vendors periodically modify background service worker execution rules. Blink is kept updated to conform with official store requirements.
                </li>
                <li>
                  <strong>Non-Interference Guarantee:</strong> The extension is engineered never to inject unsolicited ads, replace web search providers, or alter the layout or code of third-party websites you visit.
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article id="sec-5" className="legal-section">
              <div className="legal-section-tag">§ 5.0 INTEGRITY & PROHIBITIONS</div>
              <h2 className="legal-section-heading">5. Intellectual Property & Prohibited Actions</h2>
              <p className="legal-text">
                The name "Blink", the distinctive eye-mark branding, audio chime compositions, and graphic illustrations are proprietary assets of the Blink project contributors.
              </p>
              <div className="legal-callout coral">
                <AlertTriangle size={18} className="callout-icon" />
                <div>
                  <strong>Strict Prohibitions:</strong> You may not repackage, rebrand, or redistribute modified APK or extension builds bundled with malicious payloads, adware, cryptomining scripts, or tracking libraries under the name "Blink" or any confusingly similar trade dress.
                </div>
              </div>
            </article>

            {/* Section 6 */}
            <article id="sec-6" className="legal-section">
              <div className="legal-section-tag">§ 6.0 LIABILITY & WARRANTIES</div>
              <h2 className="legal-section-heading">6. Disclaimer of Warranties & Limitation of Liability</h2>
              <p className="legal-text">
                Both the mobile app and extension are provided on an <strong>"AS-IS"</strong> and <strong>"AS-AVAILABLE"</strong> basis without warranties of any kind, whether express or implied.
              </p>
              <ul className="legal-list">
                <li>
                  We do not warrant that timer triggers will remain uninterrupted across every custom Android ROM or across third-party browser developer builds.
                </li>
                <li>
                  In no event will Blink contributors be liable for any indirect, incidental, or consequential damages resulting from software use, device sleep behavior, or misconfigured alarms.
                </li>
              </ul>
            </article>

            {/* Section 7 */}
            <article id="sec-7" className="legal-section">
              <div className="legal-section-tag">§ 7.0 TERMINATION & CONTACT</div>
              <h2 className="legal-section-heading">7. Agreement Termination & Contact Details</h2>
              <p className="legal-text">
                You may terminate this agreement at any time without notice simply by uninstalling the Blink mobile APK or removing the browser extension from your browser. All provisions that by their nature should survive termination shall survive.
              </p>

              <div className="legal-signoff">
                <div className="signoff-info">
                  <h4>Legal & Licensing Inquiries</h4>
                  <p>
                    For inquiries regarding commercial bundling, source licensing, or terms clarification:
                  </p>
                </div>
                <a
                  href="mailto:arbazahmadansari03@gmail.com?subject=Blink%20Terms%20Inquiry"
                  className="btn btn-primary"
                >
                  Contact Legal Lead <span className="arrow">↗</span>
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
