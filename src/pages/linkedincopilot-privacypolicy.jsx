// linkedincopilot-privacypolicy.jsx
import React from "react";

export default function LinkedInCopilotPrivacyPolicy() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Privacy Policy</h1>
          <p style={styles.updated}>Last updated: December 15, 2025</p>
        </header>

        <section style={styles.card}>
          <h2 style={styles.h2}>Overview</h2>
          <p style={styles.p}>
            LinkedIn Comment Copilot (“the Extension”) helps users draft suggested
            comments and replies for LinkedIn posts using artificial intelligence.
            The Extension does not automatically post content on your behalf. You
            remain in full control of what is submitted to LinkedIn.
          </p>
          <p style={styles.p}>
            This Privacy Policy explains what data is processed, how it is used,
            and how it is protected.
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Information We Process</h2>
          <p style={styles.p}>
            The Extension processes the following information only when you choose
            to generate a suggestion:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>Text content from a LinkedIn post you are viewing</li>
            <li style={styles.li}>
              Text content from a LinkedIn comment you are replying to (if applicable)
            </li>
            <li style={styles.li}>
              Your selected tone preference (e.g., playful or serious)
            </li>
          </ul>
          <p style={styles.p}>
            This information is sent securely to our backend service solely to
            generate suggested comment text.
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Information We Do Not Collect</h2>
          <p style={styles.p}>We do not collect, store, or access:</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Your LinkedIn login credentials</li>
            <li style={styles.li}>Your LinkedIn profile information</li>
            <li style={styles.li}>Your connections, messages, or private data</li>
            <li style={styles.li}>Any content you post to LinkedIn</li>
            <li style={styles.li}>Any browsing activity outside of LinkedIn comment generation</li>
          </ul>
          <p style={styles.p}>
            The Extension does not track users across websites and does not use
            analytics or advertising trackers.
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>How Information Is Used</h2>
          <p style={styles.p}>The text you provide is used only to:</p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Generate short, relevant comment or reply suggestions using an AI model
            </li>
          </ul>
          <p style={styles.p}>
            The generated suggestions are returned to your browser and displayed
            for your review.
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Data Retention</h2>
          <p style={styles.p}>
            We do not intentionally store LinkedIn post text or comment text long-term.
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Requests may be temporarily processed in memory to generate responses.
            </li>
            <li style={styles.li}>
              We do not build user profiles or retain historical comment data.
            </li>
          </ul>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Data Sharing</h2>
          <p style={styles.p}>
            We do not sell, rent, or share your data with third parties.
          </p>
          <p style={styles.p}>
            Text submitted for generation is processed using a third-party AI
            provider strictly for the purpose of generating suggestions. No data
            is used for advertising or model training by us.
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Security</h2>
          <p style={styles.p}>
            We take reasonable steps to protect data during transmission, including:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>Secure HTTPS communication</li>
            <li style={styles.li}>Restricted backend access</li>
            <li style={styles.li}>Rate limiting to prevent abuse</li>
          </ul>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Your Control</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>You choose when to generate suggestions</li>
            <li style={styles.li}>You choose which suggestion, if any, to insert</li>
            <li style={styles.li}>You manually submit all comments to LinkedIn</li>
            <li style={styles.li}>The Extension does nothing without your direct action.</li>
          </ul>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Changes to This Policy</h2>
          <p style={styles.p}>
            We may update this Privacy Policy as the Extension evolves. Updates
            will be reflected on this page with a revised “Last updated” date.
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.h2}>Contact</h2>
          <p style={styles.p}>
            If you have questions about this Privacy Policy or data handling, you
            can contact:
          </p>
          <p style={styles.p}>
            Email:{" "}
            <a style={styles.link} href="mailto:support@yourdomain.com">
              noah@knockoutpromos.com
            </a>
          </p>
        </section>

        <footer style={styles.footer}>
          <span style={styles.footerText}>
            © {new Date().getFullYear()} Knockout Promos
          </span>
        </footer>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 600px at 20% 0%, rgba(124,58,237,0.22), transparent 60%), radial-gradient(900px 500px at 85% 15%, rgba(124,58,237,0.14), transparent 60%), #0b0b10",
    color: "#f5f5f7",
    padding: "28px 16px",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },
  container: {
    maxWidth: 900,
    margin: "0 auto",
  },
  header: {
    marginBottom: 16,
    padding: "10px 6px",
  },
  h1: {
    fontSize: "clamp(28px, 3vw, 40px)",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  updated: {
    margin: "8px 0 0",
    color: "rgba(245,245,247,0.7)",
    fontSize: 14,
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: "18px 18px",
    marginTop: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    backdropFilter: "blur(10px)",
  },
  h2: {
    fontSize: 18,
    margin: "0 0 10px",
    color: "#ffffff",
  },
  p: {
    margin: "10px 0",
    lineHeight: 1.6,
    color: "rgba(245,245,247,0.88)",
    fontSize: 15,
  },
  ul: {
    margin: "10px 0 0 18px",
    padding: 0,
    color: "rgba(245,245,247,0.88)",
  },
  li: {
    margin: "8px 0",
    lineHeight: 1.55,
    fontSize: 15,
  },
  link: {
    color: "#a78bfa",
    textDecoration: "none",
    borderBottom: "1px solid rgba(167,139,250,0.35)",
    paddingBottom: 1,
  },
  footer: {
    marginTop: 18,
    padding: "18px 6px 6px",
    color: "rgba(245,245,247,0.55)",
    fontSize: 12,
    textAlign: "center",
  },
  footerText: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
};
