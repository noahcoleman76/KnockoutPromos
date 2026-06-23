// src/pages/QuickQuackOfferPage.jsx
import React from "react";
import logo from "../assets/mainLogo.png";
import quickQuackLogo from "../assets/qqlogo.png";

export default function QuickQuackOfferPage() {
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
          <div className="section-inner offer-detail-layout">
            <div className="offer-detail-logo">
              <img src={quickQuackLogo} alt="Quick Quack Car Wash logo" />
            </div>

            <div>
              <p className="eyebrow">Quick Quack Car Wash Offer</p>
              <h1 className="section-title">
                First 30 days free, then $5 off every month after that.
              </h1>
              <p className="section-text">
                Try a Quick Quack Car Wash membership with your first 30 days
                free. After the free period, keep saving with $5 off every month.
              </p>

              <div className="offer-actions offer-actions-before-details">
                <a
                  href="https://knockoutpromos.com/dealershippromo"
                  className="btn btn-primary"
                >
                  Get This Offer
                </a>
                <a href="/deals" className="btn btn-outline">
                  Back to Deals
                </a>
              </div>

              <div className="offer-detail-card">
                <h2>Details</h2>
                <ul className="offer-detail-list">
                  <li>Ceramic wash subscription offer.</li>
                  <li>First 30 days are free.</li>
                  <li>After the first 30 days, save $5 every month.</li>
                  <li>Unlimited washes during the subscription.</li>
                  <li>Offer applies to one vehicle only.</li>
                  <li>Works at any Quick Quack Car Wash location.</li>
                  <li>Available to current Quick Quack subscribers.</li>
                  <li>
                    You can cancel online before the 30-day free period ends from
                    the same place you sign up.
                  </li>
                </ul>
                <p>
                  If you do not want to continue after the free period, cancel
                  before your first monthly charge.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
