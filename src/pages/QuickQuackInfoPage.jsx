import React, { useMemo, useState } from "react";
import QQlogo from "../markets/automotive/vendors/Quick Quack/qq-logo.png";
import KnockoutLogo from "../assets/Logo White Text White Fist (no BG).png";

/**
 * Quick Quack Dealership Promotion — Info Page (JSX)
 * Styled to match your existing `.promo-scope` CSS.
 *
 * Usage:
 * <QuickQuackPromo />
 */

// Updated CONFIG (drops in as-is)
const CONFIG = {
    brandName: "Quick Quack Car Wash",
    pageTitle: "Quick Quack Dealership Promotion",
    dealerFacingSubtitle:
        "Everything your team needs to confidently explain, share, and support the promotion.",

    promo: {
        headline: "30 Days Free + $5 Off Monthly (Ceramic Wash Subscription)",
        description:
            "Quick Quack partnered with Knockout Promos to offer dealership customers the first 30 days free, plus $5 off every month after — for the top-tier Ceramic Wash subscription only. Customers can cancel before the 30 days are over and won’t be charged.",

        howItWorksBullets: [
            "Share the unique link with customers, show them the QR code, or enter their info for them.",
            "Visit the URL and enter: name, email, and the dealership where they’re shopping.",
            "After submitting, Quick Quack emails the customer a promo code (plus step-by-step redemption instructions).",
            "Customer redeems by creating an account, selecting the Ceramic Wash subscription, entering card info, and applying the promo code.",
            "They can then drive straight to Quick Quack and start using the membership immediately.",
        ],

        redemptionNotes: [
            "This offer is for the top-tier Ceramic Wash subscription only.",
            "Membership works at any Quick Quack location.",
            "Customers can cancel before the first 30 days are over to avoid being charged.",
            "If the promo email doesn’t arrive, have the customer check spam/junk and retry with the correct email address.",
            "If anything fails or looks off, contact support below.",
        ],
    },

    contact: {
        name: "Noah Coleman",
        title: "Knockout Promos — Dealership Promotions Support",
        email: "noah@knockoutpromos.com",
        phone: "(801) 205-3850",
        textOk: true,
        businessHours: "Mon–Fri, 9:00am–5:00pm (local time)",
    },

    faqs: [
        {
            q: "What is this promotion?",
            a: "Quick Quack partnered with Knockout Promos to offer dealership customers a Ceramic Wash (top-tier) subscription deal: first 30 days free, plus $5 off every month after.",
        },
        {
            q: "What is included?",
            a: "The first 30 days are free. After day 30, the subscription continues at the normal monthly price minus $5 each month (Ceramic Wash subscription only).",
        },
        {
            q: "Can the customer cancel before being charged?",
            a: "Yes. If the customer cancels before the first 30 days are over, they won’t be charged.",
        },
        {
            q: "What subscription does this apply to?",
            a: "Top-tier Ceramic Wash subscription only.",
        },
        {
            q: "Where can the membership be used?",
            a: "Any Quick Quack location. The membership works across locations.",
        },
        {
            q: "How does the customer redeem it?",
            a: "They open the unique link (or scan the QR code), enter their name/email/dealership, then Quick Quack emails them a promo code with redemption steps. They create an account, select the Ceramic Wash subscription, enter card info, and apply the promo code.",
        },
        {
            q: "Can a dealership employee do it for them?",
            a: "Yes. A dealership employee can enter the customer’s info on their behalf — just make sure the email address is correct since the promo code is sent to that email.",
        },
        {
            q: "What if the customer doesn’t receive the promo email?",
            a: "Have them check spam/junk, confirm the email address was entered correctly, and try again. If it still doesn’t arrive, contact support.",
        },
        {
            q: "What should we do if the link or QR code doesn’t work?",
            a: "Follow the troubleshooting steps below. If it’s still broken, contact Noah with the dealership name, the link/QR version, and a screenshot of the error.",
        },
        {
            q: "Can we post the link publicly?",
            a: "No. The link is intended for dealership customers only. Do not post it on public social media or public websites.",
        },
    ],

    troubleshooting: {
        title: "Troubleshooting (Link / QR / Email / Redemption)",
        steps: [
            "Open the link in a different browser (Chrome/Safari) or an incognito/private window.",
            "Switch the connection (Wi-Fi ↔ cellular).",
            "If scanning a QR code, try both the phone camera and a QR scanning app (glare can break camera scans).",
            "Confirm the customer email was entered correctly (promo code is sent to that email).",
            "Have the customer check spam/junk for the promo email from Quick Quack.",
            "If the page loads but submission or redemption fails, refresh once and try again.",
            "Take a screenshot of any error and contact support with dealership + best callback number.",
        ],
        whatToSend: [
            "Dealership name + city",
            "The link (or which QR version/print piece was used)",
            "Screenshot of the error (if any)",
            "Customer email used (optional, if relevant)",
            "Short description of what happened",
        ],
    },

    quickScript: {
        title: "30-Second Staff Script",
        lines: [
            "“Quick Quack partnered with us to give you 30 days free and $5 off monthly after on the Ceramic Wash membership.”",
            "“Scan this QR code (or use this link) and enter your name, email, and our dealership — Quick Quack will email you a promo code.”",
            "“Use the promo code when you select the Ceramic Wash subscription, and you can start washing today. You can cancel before 30 days and won’t be charged.”",
        ],
    },

    disclaimer:
        "Internal dealership staff guide. Offer: first 30 days free + $5 off monthly after, Ceramic Wash subscription only. Keep the unique link/QR private.",
};


function Section({ title, children }) {
    return (
        <div className="promo-section">
            <div className="promo-section-title">{title}</div>
            <div className="promo-section-body">{children}</div>
        </div>
    );
}

function FAQItem({ q, a, open, onToggle }) {
    return (
        <div className={`promo-faq-item ${open ? "open" : ""}`}>
            <button className="promo-faq-q" onClick={onToggle} aria-expanded={open}>
                <span>{q}</span>
                <span className="promo-faq-icon">{open ? "–" : "+"}</span>
            </button>
            {open ? <div className="promo-faq-a">{a}</div> : null}
        </div>
    );
}

export default function QuickQuackPromo() {
    const [search, setSearch] = useState("");
    const [openIndex, setOpenIndex] = useState(0);

    const filteredFaqs = useMemo(() => {
        const s = search.trim().toLowerCase();
        if (!s) return CONFIG.faqs;
        return CONFIG.faqs.filter(
            (f) => f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s)
        );
    }, [search]);

    const mailto = `mailto:${CONFIG.contact.email}?subject=${encodeURIComponent(
        `${CONFIG.brandName} Dealership Promo Support`
    )}&body=${encodeURIComponent(
        `Hi ${CONFIG.contact.name},\n\nWe need help with the dealership promotion.\n\nDealership:\nCity/State:\nIssue:\nLink/QR version:\nCustomer name/contact (optional):\nScreenshot (attach if possible):\n\nThanks!`
    )}`;

    return (
        <div className="promo-scope">
            <div className="card-wrapper">
                <div className="form-container promo-info">
                    {/* Header (re-uses your existing header styles) */}
                    <div className="promo-header">
                        <div className="qq-header">
                            {/* If you already render a brand logo elsewhere, remove this img */}
                            {/* <img className="brand-logo" src="/quickquack-logo.png" alt="Quick Quack" /> */}
                            <div className="promo-title-block">
                                <div className="promo-page-title">{CONFIG.pageTitle}</div>
                                <div className="subhead">{CONFIG.dealerFacingSubtitle}</div>
                            </div>
                        </div>

                        <div className="promo-copy">
                            <img src={QQlogo} alt="Quick Quack Logo" className="brand-logo" />
                            <h2 className="headline" style={{ fontSize: 16 }}>
                                {CONFIG.promo.headline}
                            </h2>
                            <p className="intro-text">{CONFIG.promo.description}</p>
                        </div>
                    </div>

                    {/* Body sections */}
                    <Section title="How it works">
                        <ol className="promo-list">
                            {CONFIG.promo.howItWorksBullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ol>
                    </Section>

                    <Section title="Important notes">
                        <ul className="promo-list">
                            {CONFIG.promo.redemptionNotes.map((n, i) => (
                                <li key={i}>{n}</li>
                            ))}
                        </ul>
                    </Section>

                    <Section title={CONFIG.troubleshooting.title}>
                        <div className="promo-callout">
                            <div className="promo-callout-title">Checklist</div>
                            <ol className="promo-list" style={{ marginTop: 8 }}>
                                {CONFIG.troubleshooting.steps.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ol>
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <div className="promo-mini-title">When contacting support, send:</div>
                            <ul className="promo-list" style={{ marginTop: 8 }}>
                                {CONFIG.troubleshooting.whatToSend.map((x, i) => (
                                    <li key={i}>{x}</li>
                                ))}
                            </ul>
                        </div>
                    </Section>

                    <Section title={CONFIG.quickScript.title}>
                        <div className="promo-script">
                            {CONFIG.quickScript.lines.map((l, i) => (
                                <div key={i} className="promo-script-line">
                                    <div className="promo-mini-title">{`Line ${i + 1}`}</div>
                                    <div className="promo-script-text">{l}</div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="FAQs">
                        <div className="promo-search">
                            <input
                                className="input-field"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search FAQs (e.g., link, redeem, locations)"
                            />
                            <button
                                type="button"
                                className="promo-ghost"
                                onClick={() => {
                                    setSearch("");
                                    setOpenIndex(0);
                                }}
                            >
                                Reset
                            </button>
                        </div>

                        <div className="promo-faq">
                            {filteredFaqs.length === 0 ? (
                                <div className="intro-text" style={{ textAlign: "left" }}>
                                    No matching FAQs. Contact support below with details.
                                </div>
                            ) : (
                                filteredFaqs.map((f) => {
                                    const globalIndex = CONFIG.faqs.findIndex((x) => x.q === f.q);
                                    const isOpen = openIndex === globalIndex;
                                    return (
                                        <FAQItem
                                            key={f.q}
                                            q={f.q}
                                            a={f.a}
                                            open={isOpen}
                                            onToggle={() =>
                                                setOpenIndex((prev) => (prev === globalIndex ? -1 : globalIndex))
                                            }
                                        />
                                    );
                                })
                            )}
                        </div>
                    </Section>

                    <Section title="Support & contact">
                        <div className="promo-contact">
                            <div className="promo-contact-top">
                                <div>
                                    <div className="promo-contact-name">{CONFIG.contact.name}</div>
                                    <div className="subhead" style={{ textAlign: "left", marginBottom: 0 }}>
                                        {CONFIG.contact.title}
                                    </div>
                                </div>
                                <div className="promo-badges">
                                    <span className="promo-badge">Support Included</span>
                                    {CONFIG.contact.textOk ? <span className="promo-badge">Text OK</span> : null}
                                </div>
                            </div>

                            <div className="promo-contact-grid">
                                <div>
                                    <div className="promo-mini-title">Email</div>
                                    <a className="promo-link" href={mailto}>
                                        {CONFIG.contact.email}
                                    </a>
                                </div>
                                <div>
                                    <div className="promo-mini-title">Phone</div>
                                    <a className="promo-link" href={`tel:${CONFIG.contact.phone}`}>
                                        {CONFIG.contact.phone}
                                    </a>
                                </div>
                                <div>
                                    <div className="promo-mini-title">Hours</div>
                                    <div className="promo-muted">{CONFIG.contact.businessHours}</div>
                                </div>
                            </div>

                            <div className="promo-urgent">
                                <div className="promo-callout-title">Urgent issues</div>
                                <div className="promo-muted">
                                    If the link is broken at the point-of-sale, call or text and include a screenshot
                                    of the error + the dealership name.
                                </div>
                            </div>

                            <div className="promo-disclaimer">{CONFIG.disclaimer}</div>
                        </div>
                    </Section>
                </div>
            </div>
            <a href="https://knockoutpromos.com">
                {KnockoutLogo ? (
                    <img
                        src={KnockoutLogo}
                        alt="Knockout Promos Logo"
                        className="knockout-water-mark"
                    />
                ) : null}
            </a>

            <p className="footer">
                This site is powered by Knockout Promos and is authorized by S&amp;D Wash
                Management LLC
            </p>

            <div className="footer">
                Internal dealership support page. Keep the unique link/QR private. If you need updated
                materials, contact {CONFIG.contact.name}.
            </div>

            {/* Minimal CSS to “blend” with your existing tokens without fighting them.
          This is scoped and intentionally light. Remove if you prefer all CSS in your main file. */}
            <style>{`
        .promo-scope .form-container.promo-info{
          width: min(92vw, 760px);
          align-items: stretch;
        }

        .promo-scope .promo-title-block{
          width: 100%;
          text-align: center;
        }

        .promo-scope .promo-page-title{
          font-size: 18px;
          font-weight: 900;
          letter-spacing: -0.3px;
          color: var(--text);
          margin: 0;
        }

        .promo-scope .promo-section{
          width: 100%;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .promo-scope .promo-section-title{
          font-size: 13px;
          font-weight: 900;
          color: rgba(15, 23, 42, 0.88);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .promo-scope .promo-section-body{
          color: rgba(15, 23, 42, 0.80);
        }

        .promo-scope .promo-list{
          margin: 0;
          padding-left: 20px;
        }

        .promo-scope .promo-list li{
          margin-bottom: 8px;
          line-height: 1.45;
        }

        .promo-scope .promo-callout{
          width: 100%;
          margin: 8px 0 0;
          padding: 12px 12px 10px;
          border-radius: 14px;
          background: rgba(247, 146, 57, 0.10);
          border: 1px solid rgba(247, 146, 57, 0.28);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }

        .promo-scope .promo-callout-title{
          font-size: 14px;
          font-weight: 900;
          margin: 0 0 6px;
          color: rgba(15, 23, 42, 0.92);
        }

        .promo-scope .promo-mini-title{
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.3px;
          color: rgba(15, 23, 42, 0.78);
          text-transform: uppercase;
        }

        .promo-scope .promo-search{
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 6px;
        }

        .promo-scope .promo-ghost{
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(15, 23, 42, 0.14);
          background: rgba(255, 255, 255, 0.65);
          cursor: pointer;
          font-weight: 900;
          font-size: 13px;
          color: rgba(15, 23, 42, 0.86);
          transition: transform 120ms ease, box-shadow 120ms ease;
          white-space: nowrap;
        }
        .promo-scope .promo-ghost:hover{
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.08);
        }

        .promo-scope .promo-faq{
          margin-top: 10px;
          border-top: 1px solid rgba(15, 23, 42, 0.10);
        }

        .promo-scope .promo-faq-item{
          border-bottom: 1px solid rgba(15, 23, 42, 0.10);
          padding: 10px 0;
        }

        .promo-scope .promo-faq-q{
          width: 100%;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          font-size: 14px;
          font-weight: 900;
          color: rgba(15, 23, 42, 0.90);
        }

        .promo-scope .promo-faq-icon{
          font-size: 18px;
          opacity: 0.7;
          line-height: 1;
        }

        .promo-scope .promo-faq-a{
          margin-top: 8px;
          color: rgba(15, 23, 42, 0.75);
          font-size: 13px;
          line-height: 1.45;
        }

        .promo-scope .promo-script{
          border-radius: 14px;
          border: 1px solid rgba(15, 23, 42, 0.10);
          background: rgba(255, 255, 255, 0.60);
          padding: 12px;
        }
        .promo-scope .promo-script-line{
          padding: 10px 0;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }
        .promo-scope .promo-script-line:first-child{
          border-top: none;
          padding-top: 0;
        }
        .promo-scope .promo-script-text{
          margin-top: 6px;
          color: rgba(15, 23, 42, 0.78);
          font-size: 13px;
          line-height: 1.45;
        }

        .promo-scope .promo-contact{
          border-radius: 14px;
          border: 1px solid rgba(15, 23, 42, 0.10);
          background: rgba(255, 255, 255, 0.65);
          padding: 12px;
        }
        .promo-scope .promo-contact-top{
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }
        .promo-scope .promo-contact-name{
          font-weight: 900;
          color: rgba(15, 23, 42, 0.92);
          font-size: 15px;
        }
        .promo-scope .promo-badges{
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .promo-scope .promo-badge{
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: rgba(255, 255, 255, 0.75);
          font-size: 12px;
          font-weight: 900;
          color: rgba(15, 23, 42, 0.75);
          white-space: nowrap;
        }
        .promo-scope .promo-contact-grid{
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 12px;
        }

        .promo-scope .promo-link{
          font-weight: 900;
          color: rgba(15, 23, 42, 0.92);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .promo-scope .promo-muted{
          color: rgba(15, 23, 42, 0.72);
          font-size: 13px;
          line-height: 1.4;
        }

        .promo-scope .promo-urgent{
          margin-top: 12px;
          padding: 12px;
          border-radius: 14px;
          background: rgba(255, 207, 68, 0.25);
          border: 1px solid rgba(247, 146, 57, 0.25);
        }

        .promo-scope .promo-disclaimer{
          margin-top: 10px;
          font-size: 12px;
          color: rgba(15, 23, 42, 0.62);
          line-height: 1.4;
        }

        @media (max-width: 720px){
          .promo-scope .form-container.promo-info{
            width: min(92vw, 520px);
          }
          .promo-scope .promo-contact-grid{
            grid-template-columns: 1fr;
          }
          .promo-scope .promo-search{
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
        </div>
    );
}
