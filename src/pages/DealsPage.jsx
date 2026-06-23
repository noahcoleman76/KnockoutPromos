// src/pages/DealsPage.jsx
import React from "react";
import logo from "../assets/mainLogo.png";
import quickQuackLogo from "../assets/qqlogo.png";

export default function DealsPage() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <a href="/" className="logo" aria-label="Knockout Promos home">
            <img src={logo} alt="Knockout Promos logo" className="logo-image" />
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="/deals" className="nav-link nav-link-featured">
              Deals
            </a>
            <a href="/#about" className="nav-link">
              About
            </a>
            <a href="/#web-development" className="nav-link">
              Custom Website Development
            </a>
            <a href="/#partnerships" className="nav-link">
              Partnerships
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section page-hero">
          <div className="section-inner">
            <p className="eyebrow">Current Deal</p>
            <h1 className="section-title">Check out our current offers</h1>
            <p className="section-text">
              One high-value subscription promo is available right now.
            </p>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner">
            <a
              href="/deals/quick-quack-car-wash"
              className="deal-feature-card"
              aria-label="View Quick Quack Car Wash offer details"
            >
              <div className="deal-logo-wrap">
                <img src={quickQuackLogo} alt="Quick Quack Car Wash logo" />
              </div>
              <div className="deal-feature-copy">
                <span className="deal-label">Quick Quack Car Wash</span>
                <h2>First 30 days free, then $5 off every month after that.</h2>
                <p>
                  Claim a limited-time car wash membership offer through Knockout
                  Promos.
                </p>
              </div>
              <span className="btn btn-primary deal-details-button">Details</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
