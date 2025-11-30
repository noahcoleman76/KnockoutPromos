// src/App.jsx
import React from "react";
import logo from "./assets/mainLogo.png";
// https://www.aprilford.com/

function App() {
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
              <p className="hero-subtitle">
                Knockout Promos connects high-value products and services with
                people who are ready to buy — through strategic, out-of-the-box
                marketing that hits harder than ordinary ads.
              </p>

              <div className="hero-actions">
                <a href="#promos" className="btn btn-primary">
                  Explore upcoming promos
                </a>
                <a href="#partnerships" className="btn btn-outline">
                  Partner as a business
                </a>
              </div>

              <p className="hero-note">
                For customers: get access to curated, limited-time deals. <br />
                For businesses: tap into a promo engine that drives real sales,
                not just clicks.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <div className="section-inner">
            <h2 className="section-title">What is Knockout Promos?</h2>
            <p className="section-text">
              Knockout Promos is a marketing engine built around{" "}
              <strong>exclusive, high-intent offers</strong>.
            </p>
            <p className="section-text">
              We connect the best products and services with people who are
              seriously looking to buy. Instead of blasting generic ads, we
              create targeted, limited-time promotions that feel special —
              because they are.
            </p>
            <p className="section-text">
              When our audience claims an offer,{" "}
              <strong>everyone wins</strong>:
            </p>
            <ul className="list">
              <li>
                <strong>Customers</strong> get access to exclusive deals they
                can&apos;t just Google and find.
              </li>
              <li>
                <strong>Businesses</strong> get warm, purchase-ready leads and
                new recurring customers.
              </li>
              <li>
                <strong>We</strong> earn a commission only when we help drive
                real results.
              </li>
            </ul>
          </div>
        </section>

        {/* Promos Section */}
        <section className="section section-alt" id="promos">
          <div className="section-inner">
            <h2 className="section-title">Check Out Our Current Promos</h2>
            <p className="section-text">
              Soon, you&apos;ll be able to browse live Knockout Promos in your
              area and online — from subscription services to everyday products
              at exclusive rates.
            </p>

            <div className="coming-soon-card">
              <h3>Markets & Categories</h3>
              <ul className="list">
                <li>Local services – <em>coming soon</em></li>
                <li>Digital subscriptions – <em>coming soon</em></li>
                <li>Retail & product bundles – <em>coming soon</em></li>
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
              If you&apos;re a business owner, brand, or service provider,
              Knockout Promos is your new{" "}
              <strong>unfair advantage</strong>.
            </p>
            <p className="section-text">
              We don&apos;t just run ads — we design{" "}
              <strong>strategic, out-of-the-box campaigns</strong> that are
              built to move customers from &quot;interested&quot; to
              &quot;I&apos;m in.&quot;
            </p>

            <div className="partnership-grid">
              <div className="card">
                <h3>We drive serious buyers</h3>
                <p>
                  Our promos are crafted for people already in the market. That
                  means higher intent, better conversion rates, and more sales
                  from every campaign.
                </p>
              </div>
              <div className="card">
                <h3>Creative, knockout marketing</h3>
                <p>
                  We specialize in unusual, attention-grabbing strategies:
                  unique bundles, limited runs, event-based promos, and local
                  partnerships that break through the noise.
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
            <span>© {new Date().getFullYear()} Knockout Promos. All rights reserved.</span>
            <span className="footer-small">
              Built for exclusive deals & strategic partnerships.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
