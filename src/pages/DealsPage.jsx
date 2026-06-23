// src/pages/DealsPage.jsx
import React from "react";
import logo from "../assets/mainLogo.png";

const placeholderDeals = [
  {
    category: "Car Wash",
    title: "Subscription Deal Placeholder",
    value: "60 days free",
    status: "Coming soon",
  },
  {
    category: "Streaming",
    title: "Digital Subscription Placeholder",
    value: "Exclusive discount",
    status: "Coming soon",
  },
  {
    category: "Fitness",
    title: "Membership Offer Placeholder",
    value: "Trial offer",
    status: "Coming soon",
  },
  {
    category: "Local Service",
    title: "Service Plan Placeholder",
    value: "Partner perk",
    status: "Coming soon",
  },
];

export default function DealsPage() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <a href="/" className="logo" aria-label="Knockout Promos home">
            <img src={logo} alt="Knockout Promos logo" className="logo-image" />
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="/#about" className="nav-link">
              About
            </a>
            <a href="/deals" className="nav-link">
              Deals
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
            <p className="eyebrow">Current Deals</p>
            <h1 className="section-title">
              High-value subscription offers in one place.
            </h1>
            <p className="section-text">
              Browse active discounts, free trials, and partner offers from
              subscription services. Real offers will appear here as they launch.
            </p>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner">
            <div className="deals-grid">
              {placeholderDeals.map((deal) => (
                <article className="deal-listing-card" key={deal.title}>
                  <span className="deal-label">{deal.category}</span>
                  <h2>{deal.title}</h2>
                  <strong>{deal.value}</strong>
                  <p>{deal.status}</p>
                  <button className="btn btn-outline" type="button" disabled>
                    Details Coming Soon
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
