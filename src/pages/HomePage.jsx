// src/pages/HomePage.jsx
import React from "react";
import logo from "../assets/mainLogo.png";

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

export default function HomePage() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <a href="#top" className="logo" aria-label="Knockout Promos home">
            <img src={logo} alt="Knockout Promos logo" className="logo-image" />
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="/deals" className="nav-link">
              Deals
            </a>
            <a href="#web-development" className="nav-link">
              Custom Website Development
            </a>
            <a href="#partnerships" className="nav-link">
              Partnerships
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
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

            <div className="hero-visual" aria-label="Deal preview">
              <div className="deal-card deal-card-featured">
                <span className="deal-label">Member Offer</span>
                <strong>High-value discounts</strong>
                <p>Subscription offers sourced for real savings</p>
              </div>
              <div className="deal-card deal-card-offset">
                <span className="deal-label">New Deals</span>
                <strong>Updated as offers launch</strong>
                <p>Browse current placeholders on the deals page</p>
              </div>
              <div className="deal-metrics">
                <span>Discounts</span>
                <span>Free trials</span>
                <span>Bonus perks</span>
              </div>
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

        <section className="section section-alt" id="web-development">
          <div className="section-inner">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Custom Website Development</p>
                <h2 className="section-title">
                  Need a website too?
                </h2>
              </div>
              <a href="https://colemandev.com" className="btn btn-outline">
                View Portfolio
              </a>
            </div>

            <p className="section-text">
              Knockout Promos also offers custom website development for local
              businesses, entrepreneurs, restaurants, service providers, and
              product-focused brands.
            </p>

            <div className="service-grid">
              {developmentServices.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>

            <div className="portfolio-strip" aria-label="Selected portfolio sites">
              {portfolioProjects.map((project) => (
                <a
                  href={project.url}
                  className="portfolio-pill"
                  key={project.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="partnerships">
          <div className="section-inner">
            <h2 className="section-title">Have an offer?</h2>
            <p className="section-text">
              If you run a subscription service or have a strong discount to share,
              reach out and let us know what you are offering.
            </p>

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
