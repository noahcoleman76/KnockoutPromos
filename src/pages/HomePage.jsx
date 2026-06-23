// src/pages/HomePage.jsx
import React, { useState } from "react";
import logo from "../assets/mainLogo.png";
import searchingDealsImage from "../assets/searching-hero.jpg";
import weSearchImage from "../assets/wesearch-card.jpg";
import happyDealsImage from "../assets/happydeals-card.jpg";
import sharingDealsImage from "../assets/sharingdeals-card.jpg";
import webDevelopmentImage from "../assets/webdev-section.jpg";
import partnerWithUsImage from "../assets/partnerwithus-section.jpg";

const developmentServices = [
  {
    title: "Custom design",
    body: "A clean site that fits your business and makes the next step obvious.",
  },
  {
    title: "Mobile-ready builds",
    body: "Fast pages that work well on phones, tablets, and desktops.",
  },
  {
    title: "Launch support",
    body: "Help with updates, landing pages, and campaign-ready site changes.",
  },
];

const portfolioProjects = [
  { name: "Live Like Garrett", url: "https://livelikegarrett.com" },
  { name: "Maracas Mexican Grill", url: "https://maracassantaquin.com" },
  { name: "RopeHog", url: "https://ropehog.com" },
  { name: "Aroma Cafe", url: "https://aromacafeutah.com" },
  { name: "Desaree Stevens Realty", url: "https://www.desareestevens.com" },
  { name: "South Valley Home Repairs", url: "https://southvalleyhomerepairs.com" },
];

const dealSteps = [
  {
    title: "We search",
    body: "We look for valuable discounts and subscription offers.",
    image: weSearchImage,
    alt: "A person searching for good deals",
  },
  {
    title: "You save",
    body: "You find offers worth getting excited about.",
    image: happyDealsImage,
    alt: "A woman excited on her phone after finding a good deal",
  },
  {
    title: "Share the value",
    body: "Send a strong offer to someone who could use it.",
    image: sharingDealsImage,
    alt: "Two friends looking at a phone while sharing something valuable",
  },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <a
            href="#top"
            className="logo"
            aria-label="Knockout Promos home"
            onClick={closeMenu}
          >
            <img src={logo} alt="Knockout Promos logo" className="logo-image" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="home-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`nav ${isMenuOpen ? "nav-open" : ""}`}
            id="home-navigation"
            aria-label="Main navigation"
          >
            <a
              href="/deals"
              className="nav-link nav-link-featured"
              onClick={closeMenu}
            >
              Deals
            </a>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
            <a
              href="#web-development"
              className="nav-link"
              onClick={closeMenu}
            >
              Custom Website Development
            </a>
            <a href="#partnerships" className="nav-link" onClick={closeMenu}>
              Partnerships
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="hero"
          id="top"
          style={{ "--hero-bg-image": `url(${searchingDealsImage})` }}
        >
          <div className="hero-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Exclusive subscription-service deals</p>
              <h1 className="hero-title">
                Better deals on the services you already use.
              </h1>

              <div className="hero-CTA">
                <p className="hero-subtitle">
                  We source high-value discounts, free trials, and special offers
                  for subscription services.
                </p>

                <div className="hero-actions">
                  <a href="/deals" className="btn btn-primary">
                    See Deals
                  </a>
                  <a href="#web-development" className="btn btn-outline">
                    Website Development
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-image-panel">
              <img
                src={searchingDealsImage}
                alt="A man searching on his computer for good deals"
                className="hero-deal-image"
              />
              <div className="hero-image-badge">
                <span>Discounts</span>
                <span>Free trials</span>
                <span>Bonus perks</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section deal-story-section">
          <div className="section-inner">
            <div className="deal-story-grid">
              {dealSteps.map((step) => (
                <article className="deal-story-card" key={step.title}>
                  <img src={step.image} alt={step.alt} />
                  <div>
                    <h2>{step.title}</h2>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="section-inner">
            <div className="about-tag">About Knockout Promos</div>

            <div className="about-layout">
              <div className="about-main">
                <h2 className="section-title about-title">
                  Simple access to better subscription offers.
                </h2>

                <p className="section-text">
                  Knockout Promos finds and organizes discounts, free trials, and
                  limited-time offers from subscription services so customers can
                  quickly see what is worth claiming.
                </p>

                <p className="section-text">
                  We also build custom websites and landing pages for businesses
                  that need a stronger online presence or a cleaner place to send
                  customers.
                </p>
              </div>

              <aside className="about-highlight">
                <h3>What you will find</h3>
                <p>
                  Subscription discounts, free trial offers, member perks, and
                  partner promotions.
                </p>

                <div className="about-highlight-divider" />

                <p className="about-highlight-sub">
                  Visit the deals page to see available offers.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="partnerships">
          <div className="section-inner">
            <div className="partnership-layout">
              <div>
                <h2 className="section-title">Have an offer?</h2>
                <p className="section-text">
                  If you run a subscription service or have a strong discount to
                  share, reach out and let us know what you are offering.
                </p>
              </div>

              <div className="partner-image-panel">
                <img
                  src={partnerWithUsImage}
                  alt="People partnering to share a valuable offer"
                />
              </div>
            </div>

            <div className="partnership-grid">
              <div className="card">
                <h3>Offer Strategy</h3>
                <p>
                  We help package discounts, free trials, and member perks into
                  campaigns that are easy for customers to understand.
                </p>
              </div>
              <div className="card">
                <h3>Landing Pages</h3>
                <p>
                  Promo pages can be built around a single partner, market, or
                  subscription offer so the customer path stays focused.
                </p>
              </div>
              <div className="card">
                <h3>Aligned Growth</h3>
                <p>
                  Campaigns are designed around real signups, sales, and customer
                  acquisition instead of surface-level attention.
                </p>
              </div>
            </div>

            <p className="section-text">
              For partnerships or website projects, reach out at{" "}
              <a href="mailto:noah@knockoutpromos.com" className="link">
                noah@knockoutpromos.com
              </a>
              .
            </p>
          </div>
        </section>

        <section className="section section-alt" id="web-development">
          <div className="section-inner">
            <div className="web-development-layout">
              <div>
                <div className="section-heading-row">
                  <div>
                    <p className="eyebrow">Custom Website Development</p>
                    <h2 className="section-title">
                      Need a website too?
                    </h2>
                  </div>
                  <a href="#portfolio-websites" className="btn btn-outline">
                    View Portfolio
                  </a>
                </div>

                <p className="section-text">
                  Knockout Promos also offers custom website development for local
                  businesses, entrepreneurs, restaurants, service providers, and
                  product-focused brands.
                </p>
              </div>

              <div className="webdev-image-panel">
                <img
                  src={webDevelopmentImage}
                  alt="A team of collaborators building software"
                />
              </div>
            </div>

            <div className="service-grid">
              {developmentServices.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>

            <div className="portfolio-preview-heading" id="portfolio-websites">
              <p className="eyebrow">Portfolio Websites</p>
              <h2>Sites We've Built</h2>
            </div>

            <div
              className="portfolio-preview-strip"
              aria-label="Selected portfolio site previews"
            >
              {portfolioProjects.map((project) => (
                <article className="portfolio-preview-card" key={project.name}>
                  <div className="portfolio-frame-wrap">
                    <iframe
                      src={project.url}
                      title={`${project.name} website preview`}
                      loading="lazy"
                    />
                  </div>
                  <div className="portfolio-preview-info">
                    <h3>{project.name}</h3>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Visit site
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <span>
              © {new Date().getFullYear()} Knockout Promos. All rights reserved.
            </span>
            <span className="footer-small">
              Subscription deals and custom website development.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
