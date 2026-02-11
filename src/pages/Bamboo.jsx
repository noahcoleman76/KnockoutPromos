// src/pages/Bamboo.jsx
import React, { useMemo, useState } from "react";
import bambooLogo from "../assets/bamboohr-dark.png";

const ArrowRight = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path
            fill="currentColor"
            d="M13.2 5.6a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.3-3.3H5a1 1 0 1 1 0-2h11.1l-2.9-2.9a1 1 0 0 1 0-1.4Z"
        />
    </svg>
);

export default function Bamboo() {
    const [slide, setSlide] = useState(0);

    // Lighter theme, still Bamboo-green-led
    const theme = useMemo(
        () => ({
            green: "#88C038",
            green2: "#A6E34B",
            ink: "#0e1a10",
            ink2: "#18301b",
            paper: "#F6FBF4",
            paper2: "#EEF7EA",
            text: "rgba(8,18,10,0.92)",
            mutetext: "rgba(8,18,10,0.65)",
            line: "rgba(10,24,12,0.12)",
            panel: "rgba(255,255,255,0.72)",
            panelStroke: "rgba(10,24,12,0.10)",
        }),
        []
    );

    const totalSlides = 5;
    const next = () => setSlide((s) => Math.min(s + 1, totalSlides - 1));
    const prev = () => setSlide((s) => Math.max(s - 1, 0));

    const isHero = slide === 0;
    const isLinks = slide === 4;

    return (
        <div
            className="bamboo-wrap"
            style={{
                color: theme.text,
                background: isHero
                    ? `radial-gradient(1100px 700px at 15% 10%, rgba(136,192,56,0.30), rgba(255,255,255,0) 60%),
             radial-gradient(900px 600px at 80% 30%, rgba(166,227,75,0.22), rgba(255,255,255,0) 58%),
             linear-gradient(135deg, ${theme.paper} 0%, ${theme.paper2} 55%, ${theme.paper} 100%)`
                    : `linear-gradient(180deg, ${theme.paper} 0%, ${theme.paper2} 100%)`,
            }}
        >
            <div className="bamboo-topbar" style={{ borderBottom: `1px solid ${theme.line}` }}>
                <div className="bamboo-name">
                    <div className="bamboo-h1">Noah Coleman</div>
                    <div className="bamboo-sub" style={{ color: theme.mutetext }}>
                        Your #1 pick
                    </div>
                </div>

                <div className="bamboo-progress">
                    <div className="bamboo-pill" style={{ border: `1px solid ${theme.line}`, color: theme.mutetext }}>
                        Slide {slide + 1} / {totalSlides}
                    </div>
                </div>
            </div>

            {isHero ? (
                <div className="hero">
                    <div className="hero-inner">
                        <div className="hero-title">
                            Welcome <span className="hero-name">Garret</span>
                        </div>

                        <div className="hero-logoWrap" aria-hidden="true">
                            <img className="hero-logo" src={bambooLogo} alt="" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bamboo-stage">
                    {!isLinks ? (
                        <div className="bamboo-panel" style={{ border: `1px solid ${theme.panelStroke}` }}>
                            {slide === 1 && <Slide2 theme={theme} />}
                            {slide === 2 && <Slide3 theme={theme} />}
                            {slide === 3 && <Slide4 theme={theme} />}
                        </div>
                    ) : (
                        <div className="bamboo-links">
                            <Slide5 theme={theme} />
                        </div>
                    )}
                </div>
            )}

            <div className="bamboo-footer" style={{ borderTop: `1px solid ${theme.line}` }}>
                <button className="bamboo-btn ghost" onClick={prev} disabled={slide === 0} aria-disabled={slide === 0}>
                    Back
                </button>

                <div className="bamboo-footer-center" style={{ color: theme.mutetext }}>
                    Interview deck • BambooHR
                </div>

                <button className="bamboo-btn" onClick={next} disabled={slide === totalSlides - 1}>
                    Next <span className="bamboo-arrow"><ArrowRight /></span>
                </button>
            </div>

            <style>{`
        .bamboo-wrap{
          min-height: 100vh;
          display:flex;
          flex-direction:column;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
          letter-spacing: -0.01em;
          padding-bottom: 76px;
        }

        .bamboo-topbar{
          padding: 18px 22px;
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap: 16px;
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(10px);
        }
        .bamboo-h1{ font-size: 22px; font-weight: 800; line-height: 1.05; }
        .bamboo-sub{ font-size: 13px; margin-top: 4px; }
        .bamboo-pill{
          font-size: 12px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.55);
          user-select:none;
        }

        .bamboo-stage{
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          padding: 26px 22px;
        }

        /* BIG CENTER PANEL (slides 2-4) */
        .bamboo-panel{
          width: min(1100px, 100%);
          border-radius: 22px;
          padding: 30px;
          background: ${theme.panel};
          box-shadow: 0 20px 55px rgba(10,24,12,0.12);
        }

        /* HERO (slide 1) */
        .hero{
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          padding: 26px 22px;
        }
        .hero-inner{
          width: min(1200px, 100%);
          position: relative;
          min-height: 520px;
          display:flex;
          align-items:flex-start;
          justify-content:center;
          padding-top: 54px;
        }
        .hero-title{
          position: relative;
          z-index: 3;
          font-size: clamp(44px, 6vw, 76px);
          font-weight: 950;
          letter-spacing: -0.03em;
          text-align:center;
          line-height: 1.02;
          text-shadow: 0 16px 44px rgba(10,24,12,0.12);
          color: rgb(155, 155, 155);
        }
        .hero-name{
          color: ${theme.ink2};
          background: linear-gradient(90deg, ${theme.green} 0%, ${theme.green2} 70%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-logoWrap{
          position:absolute;
          inset: 0;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index: 1;
          pointer-events:none;
        }
        .hero-logo{
          width: min(980px, 95%);
          height:auto;
          filter:
            drop-shadow(0 24px 70px rgba(10,24,12,0.18))
            saturate(1.05);
          transform: translateY(30px);
        }

        /* Footer */
        .bamboo-footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 12px;

  padding: 14px 22px;
  background: rgba(255,255,255,0.65);
  backdrop-filter: blur(12px);

  border-top: 1px solid rgba(10,24,12,0.12);
  z-index: 50;
}

        .bamboo-footer-center{ font-size: 12px; user-select:none; opacity: 0.9; }

        .bamboo-btn{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          border: 1px solid rgba(10,24,12,0.14);
          background: rgba(136,192,56,0.22);
          color: rgba(8,18,10,0.92);
          padding: 10px 14px;
          border-radius: 12px;
          font-weight: 800;
          cursor:pointer;
          transition: transform .08s ease, background .18s ease, border-color .18s ease, opacity .18s ease;
        }
        .bamboo-btn:hover{
          background: rgba(136,192,56,0.30);
          border-color: rgba(136,192,56,0.70);
        }
        .bamboo-btn:active{ transform: translateY(1px); }
        .bamboo-btn:disabled{ opacity: 0.55; cursor:not-allowed; }
        .bamboo-btn.ghost{ background: rgba(255,255,255,0.55); }
        .bamboo-arrow{ display:inline-flex; align-items:center; justify-content:center; }

        /* Shared content styles */
        .kicker{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          font-size: 12px;
          color: ${theme.mutetext};
          border: 1px solid rgba(10,24,12,0.10);
          background: rgba(255,255,255,0.55);
          padding: 8px 10px;
          border-radius: 999px;
        }
        .dot{
          width:10px; height:10px; border-radius:999px;
          background: ${theme.green};
          box-shadow: 0 0 0 4px rgba(136,192,56,0.16);
        }
        .title{
          font-size: 40px;
          font-weight: 950;
          line-height: 1.05;
          margin-top: 16px;
          letter-spacing: -0.03em;
          color: rgba(8,18,10,0.95);
        }
        .subtitle{
          margin-top: 10px;
          font-size: 16px;
          color: rgba(8,18,10,0.68);
          line-height: 1.6;
          max-width: 78ch;
        }

        /* STACKED TOPICS */
        .stack{
          margin-top: 18px;
          display:flex;
          flex-direction:column;
          gap: 14px;
        }
        .topic{
          border-radius: 18px;
          border: 1px solid rgba(10,24,12,0.10);
          background: rgba(255,255,255,0.62);
          padding: 16px;
        }
        .topic h3{
          margin:0;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: rgba(8,18,10,0.92);
        }
        .topic p{
          margin: 8px 0 0 0;
          color: rgba(8,18,10,0.68);
          font-size: 14px;
          line-height: 1.55;
        }

        /* EXPERIENCE */
        .expGrid{
          margin-top: 18px;
          display:grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .exp{
          border-radius: 18px;
          border: 1px solid rgba(10,24,12,0.10);
          background: rgba(255,255,255,0.62);
          padding: 16px;
        }
        .expHeader{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap: 12px;
        }
        .expTitle{
          margin:0;
          font-size: 16px;
          font-weight: 950;
          letter-spacing: -0.02em;
          color: rgba(8,18,10,0.92);
        }
        .badge{
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(136,192,56,0.45);
          background: rgba(136,192,56,0.18);
          color: rgba(8,18,10,0.86);
          white-space: nowrap;
          font-weight: 900;
        }
        .bullets{
          margin: 12px 0 0 0;
          padding-left: 18px;
          color: rgba(8,18,10,0.82);
          line-height: 1.7;
        }
        .bullets li{ margin: 7px 0; }
        .apply{
          margin-top: 10px;
          color: rgba(8,18,10,0.68);
          font-size: 13px;
          line-height: 1.55;
          border-top: 1px solid rgba(10,24,12,0.10);
          padding-top: 10px;
        }

        /* Links page */
        .bamboo-links{
          width: min(1100px, 100%);
          padding: 10px 2px;
        }
        .linksTitle{
          font-size: 44px;
          font-weight: 950;
          letter-spacing: -0.03em;
          margin: 0;
          color: rgba(8,18,10,0.95);
        }
        .linksSub{
          margin: 10px 0 0 0;
          color: rgba(8,18,10,0.68);
          line-height: 1.6;
          max-width: 85ch;
        }
        .linkList{
          margin-top: 22px;
          display:flex;
          flex-direction:column;
          gap: 14px;
        }
        .linkRow{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap: 18px;
          padding: 14px 14px;
          border-radius: 16px;
          border: 1px solid rgba(10,24,12,0.10);
          background: rgba(255,255,255,0.55);
        }
        .linkName{
          font-weight: 950;
          letter-spacing: -0.02em;
          margin: 0;
          font-size: 16px;
          color: rgba(8,18,10,0.92);
        }
        .linkDesc{
          margin: 8px 0 0 0;
          color: rgba(8,18,10,0.68);
          line-height: 1.55;
          font-size: 14px;
        }
        .linkA{
          flex: 0 0 auto;
          text-decoration:none;
          font-weight: 950;
          color: rgba(8,18,10,0.92);
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(10,24,12,0.14);
          background: rgba(255,255,255,0.60);
          transition: background .18s ease, border-color .18s ease;
        }
        .linkA:hover{
          border-color: rgba(136,192,56,0.70);
          background: rgba(136,192,56,0.18);
        }

        @media (max-width: 860px){
          .bamboo-panel{ padding: 22px; border-radius: 18px; }
          .title{ font-size: 34px; }
          .hero-inner{ min-height: 460px; }
          .linkRow{ flex-direction:column; align-items:stretch; }
          .linkA{ width: fit-content; }
        }
      `}</style>
        </div>
    );
}

function Slide2() {
    return (
        <div>
            <div className="title">What I want to cover</div>

            <div className="stack">
                <div className="topic">
                    <h3>1) My Experience</h3>
                    <p>Performance proof + team leadership responsibilities + operational leverage.</p>
                </div>
                <div className="topic">
                    <h3>2) The Best Fit</h3>
                    <p>How the job changes: coaching, accountability, hiring, and consistent outcomes.</p>
                </div>
                <div className="topic">
                    <h3>3) My Portfolio</h3>
                    <p>Systems I’ve built that teams actually use (visibility, organization, accountability).</p>
                </div>
            </div>
        </div>
    );
}

function Slide4() {
    return (
        <div>
            <div className="title">Would Noah make a good manager?</div>
            <div className="subtitle">You decide:</div>

            <ul className="bullets">
                <li>
                    <strong>Proven performance:</strong> Finished #1 out of 48 SDRs at 203% of annual quota, so I coach from real, repeatable results.
                </li>
                <li>
                    <strong>Intentional coaching:</strong> Run structured 1:1s focused on behavior, messaging, and execution, not just activity counts.
                </li>
                <li>
                    <strong>Operational leverage:</strong> Build tools and reporting that make performance visible, diagnosable, and scalable across teams.
                </li>
                <li>
                    <strong>Revenue alignment:</strong> Coach SDRs to create opportunities AEs want with clean handoffs, real buyer intent, and higher conversion.
                </li>
                <li>
                    <strong>Clear standards:</strong> Set explicit expectations and track execution so accountability is objective, not emotional.
                </li>
            </ul>

        </div>
    );
}

function Slide3({ theme }) {
    return (
        <div>
            <div className="title">My experience</div>
            <div className="subtitle">Sales since 2020. Already working in leadership; ready to formalize it.</div>

            <div className="expGrid">
                <div className="exp">
                    <div className="expHeader">
                        <h3 className="expTitle">NiCE — SDR / Team Lead</h3>
                        <div className="badge">#1 of 48 • 203% quota</div>
                    </div>
                    <ul className="bullets">
                        <li>Finished last year in <strong>1st place</strong> out of 48 SDRs at <strong>203% of yearly quota</strong>.</li>
                        <li>Run <strong>1:1 meetings</strong> to coach execution, messaging, and daily habits.</li>
                        <li>Lead <strong>trainings</strong> and create <strong>reports</strong> to drive focus and accountability.</li>
                    </ul>
                    <div className="apply">
                        <strong>How it applies:</strong> performance credibility + coaching reps + repeatable systems.
                    </div>
                </div>

                <div className="exp">
                    <div className="expHeader">
                        <h3 className="expTitle">Chipr Home Solutions — Sales Operations and Data Analytics</h3>
                        <div className="badge">Systems & reporting</div>
                    </div>
                    <ul className="bullets">
                        <li>Built reporting and KPI visibility for leadership.</li>
                        <li>Designed process + definitions so execution stayed measurable.</li>
                        <li>Enabled decisions with clean, consistent metrics.</li>
                        <li>Ran reports and analysis closesly with CFO, COO, and accounting.</li>
                        <li>Built reports with mySQL and spreadsheets.</li>
                    </ul>
                    <div className="apply">
                        <strong>How it applies:</strong> managers win with visibility, consistency, and cadence.
                    </div>
                </div>

                <div className="exp">
                    <div className="expHeader">
                        <h3 className="expTitle">Coalition Inc — Account Executive (Closer)</h3>
                        <div className="badge">Closing & deal ownership</div>
                    </div>
                    <ul className="bullets">
                        <li>Owned late-stage pipeline and full deal execution.</li>
                        <li>Qualified and advanced opportunities based on real buying signals.</li>
                        <li>Learned what makes an opportunity worth an AE’s time vs. noise.</li>
                        <li>Customer facing, led demos of our platform</li>

                    </ul>
                    <div className="apply">
                        <strong>How it applies:</strong> I coach SDRs to create opportunities that actually convert, not just book meetings.
                    </div>
                </div>

                <div className="exp">
                    <div className="expHeader">
                        <h3 className="expTitle">Boostability — Sales Development Representative</h3>
                        <div className="badge">Outbound fundamentals</div>
                    </div>
                    <ul className="bullets">
                        <li>High-volume outbound prospecting across calls, email, and follow-ups.</li>
                        <li>Built daily habits around activity, consistency, and pipeline creation.</li>
                        <li>Experienced firsthand where reps struggle with motivation, messaging, and process.</li>
                    </ul>
                    <div className="apply">
                        <strong>How it applies:</strong> I manage with empathy and structure because I’ve lived the SDR grind myself.
                    </div>
                </div>

            </div>

            <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                    href="/Noah_Coleman_Resume.docx"
                    download
                    style={{
                        textDecoration: "none",
                        fontWeight: 950,
                        color: "rgba(8,18,10,0.92)",
                        padding: "10px 12px",
                        borderRadius: 12,
                        border: "1px solid rgba(10,24,12,0.14)",
                        background: "rgba(255,255,255,0.70)",
                    }}
                >
                    Download Resume (.docx)
                </a>

                <a
                    href="https://www.linkedin.com/in/noah-coleman24/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        textDecoration: "none",
                        fontWeight: 950,
                        color: "rgba(8,18,10,0.92)",
                        padding: "10px 12px",
                        borderRadius: 12,
                        border: "1px solid rgba(10,24,12,0.14)",
                        background: "rgba(255,255,255,0.70)",
                    }}
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

function Slide5() {
    const links = [
        {
            name: "Metrics Tracker (org-wide)",
            desc: "Personal metrics tracker + SDR organization tool I built and launched. Now used by every team.",
            href: "https://docs.google.com/spreadsheets/d/10-Mo3rYlKQS3vIRGaTHV9pv6_U5Eu0ZQgWXTOXSW_nQ/edit?usp=sharing",
            cta: "Open",
        },
        {
            name: "AE Account Map Tool",
            desc: "Sync tool with my AE to target accounts cleanly (no toe-stepping). Rolled out to my team.",
            href: "https://docs.google.com/spreadsheets/d/1ndvkfd2HIx75IwRoeIbT8-b8B7F-wKS7JCdwXUkxyso/edit?usp=sharing",
            cta: "Open",
        },
        {
            name: "BDR Dragon",
            desc: "SDR organization + accountability web app connected with Salesforce (in progress).",
            href: "https://noahcoleman76.github.io/BDR-Dragon/",
            cta: "Open",
        },
        {
            name: "LinkedIn",
            desc: "Professional profile + background and experience.",
            href: "https://www.linkedin.com/in/noah-coleman24/",
            cta: "Open",
        },
        {
            name: "ColemanDev",
            desc: "My website offering website building services.",
            href: "https://colemandev.com",
            cta: "Open",
        },
        {
            name: "Knockout Promos",
            desc: "Exclusive offer web store side hustle.",
            href: "https://knockoutpromos.com",
            cta: "Open",
        },
    ];

    return (
        <div>
            <h1 className="linksTitle">Projects & links</h1>

            <div className="linkList">
                {links.map((l) => (
                    <div className="linkRow" key={l.name}>
                        <div style={{ minWidth: 0 }}>
                            <p className="linkName">{l.name}</p>
                            <p className="linkDesc">{l.desc}</p>
                        </div>

                        <a className="linkA" href={l.href} target="_blank" rel="noreferrer">
                            {l.cta}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
