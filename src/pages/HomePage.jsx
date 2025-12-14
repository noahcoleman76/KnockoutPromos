// src/pages/HomePage.jsx
import React from "react";
import logo from "../assets/mainLogo.png";

export default function HomePage() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <img src={logo} alt="Knockout Promos logo" className="logo-image" />
          </div>

          <nav className="nav">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#promos" className="nav-link">
              Promos
            </a>
            <a href="#partnerships" className="nav-link">
              Partnerships
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="top">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title">
                Exclusive offers you{" "}
                <span className="highlight">won&apos;t find anywhere else.</span>
              </h1>

              <div className="hero-CTA">
                <p className="hero-subtitle">
                  Your source for top-quality products, services, and limited-time
                  offers you won’t find anywhere else.
                </p>

                <div className="hero-actions">
                  <a href="#promos" className="btn btn-primary">
                    View Current Offers
                  </a>
                  <a href="#partnerships" className="btn btn-outline">
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section section-alt" id="about">
          <div className="section-inner">
            <div className="about-tag">About Knockout Promos</div>

            <div className="about-layout">
              <div className="about-main">
                <h2 className="section-title about-title">
                  What is <span className="highlight">Knockout Promos?</span>
                </h2>

                <p className="section-text">
                  Knockout Promos hooks you up with{" "}
                  <strong>exclusive, insider-level deals</strong> you won’t find
                  anywhere else.
                </p>

                <p className="section-text">
                  We partner with strategic suppliers and service providers to bring
                  you limited-time offers on subscription services, accessories, and
                  high-value products — including{" "}
                  <strong>deep discounts, bonuses, and even freebies</strong>.
                </p>

                <p className="section-text">
                  When you claim an offer, <strong>everyone wins</strong>:
                </p>

                <ul className="about-list">
                  <li>
                    <strong>Customers</strong> get access to exclusive deals they
                    can’t just Google and find.
                  </li>
                  <li>
                    <strong>Brands</strong> gain warm, ready-to-buy customers who
                    actually stick around.
                  </li>
                  <li>
                    <strong>We</strong> only earn when we help drive real results —
                    simple, transparent, effective.
                  </li>
                </ul>
              </div>

              <aside className="about-highlight">
                <h3>Right now</h3>
                <p>
                  We’re already shaking up the <strong>car industry</strong> with
                  standout perks for new buyers.
                </p>

                <div className="about-highlight-divider" />

                <p className="about-highlight-sub">
                  Next up: more markets, more products, more ways to save.
                </p>
                <p className="about-highlight-note">
                  Big deals. Real savings. Only at <strong>Knockout Promos</strong>.
                </p>
              </aside>
            </div>

            <div className="about-cta">
              <a href="#promos" className="btn btn-primary about-cta-btn">
                View Current Promotions
              </a>
              <p className="about-cta-note">
                See live deals, discounts & freebies available right now.
              </p>
            </div>
          </div>
        </section>

        {/* Promos Section */}
        <section className="section section-alt" id="promos">
          <div className="section-inner">
            <h2 className="section-title">Check Out Our Current Promos</h2>
            <p className="section-text">
              Soon, you&apos;ll be able to browse live Knockout Promos in your area
              and online — from subscription services to everyday products at
              exclusive rates.
            </p>

            <div className="coming-soon-card">
              <h3>Markets & Categories</h3>
              <ul className="list">
                <li>
                  Local services – <em>coming soon</em>
                </li>
                <li>
                  Digital subscriptions – <em>coming soon</em>
                </li>
                <li>
                  Retail & product bundles – <em>coming soon</em>
                </li>
              </ul>
              <p className="coming-soon-tag">Promos launching soon. Stay tuned.</p>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="section" id="partnerships">
          <div className="section-inner">
            <h2 className="section-title">Partnerships & Collaborations</h2>
            <p className="section-text">
              If you&apos;re a business owner, brand, or service provider, Knockout
              Promos is your new <strong>unfair advantage</strong>.
            </p>
            <p className="section-text">
              We don&apos;t just run ads — we design{" "}
              <strong>strategic, out-of-the-box campaigns</strong> that are built
              to move customers from &quot;interested&quot; to &quot;I&apos;m in.&quot;
            </p>

            <div className="partnership-grid">
              <div className="card">
                <h3>We drive serious buyers</h3>
                <p>
                  Our promos are crafted for people already in the market. That
                  means higher intent, better conversion rates, and more sales from
                  every campaign.
                </p>
              </div>
              <div className="card">
                <h3>Creative, knockout marketing</h3>
                <p>
                  We specialize in unusual, attention-grabbing strategies: unique
                  bundles, limited runs, event-based promos, and local partnerships
                  that break through the noise.
                </p>
              </div>
              <div className="card">
                <h3>Aligned incentives</h3>
                <p>
                  We earn when you earn. Our model is commission-driven, so our
                  success is tied directly to the results we bring you.
                </p>
              </div>
            </div>

            <p className="section-text">
              Interested in partnering with Knockout Promos? For now, reach out
              directly at{" "}
              <a href="mailto:noah@knockoutpromos.com" className="link">
                noah@knockoutpromos.com
              </a>{" "}
              and let&apos;s talk about your ideal customer and what a
              knockout-level promo could look like.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <span>
              © {new Date().getFullYear()} Knockout Promos. All rights reserved.
            </span>
            <span className="footer-small">
              Built for exclusive deals & strategic partnerships.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
