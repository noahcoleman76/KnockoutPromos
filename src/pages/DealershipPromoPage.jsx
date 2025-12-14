import QQlogo from "../markets/automotive/vendors/Quick Quack/QQlogo.png"; // adjust path if needed
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/promoStyles.css"

// Adjust this import to wherever your registry lives:
import { getDealershipById } from "../markets/automotive/distributors/dealerships/dealershipRegistry";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxB8gsbZb7466WYQtwyE4CVO_9LQDnjzXZfC8t-Q2QPxwFO9LeAb3PBZPzHPillw84L/exec";

export default function DealershipPromoPage() {
  const navigate = useNavigate();
  const { dealershipId } = useParams();

  const entry = useMemo(() => getDealershipById(dealershipId), [dealershipId]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Mimic your old clearInputs() + window.onload behavior
  useEffect(() => {
    sessionStorage.clear();
    setFname("");
    setLname("");
    setEmail("");
  }, [dealershipId]);

  if (!entry) {
    return (
      <div className="page">
        <main className="card-wrapper">
          <div className="form-container">
            <h1 className="thankyou">Dealership Not Found</h1>
            <p className="intro-text">
              We couldn’t find <strong>{dealershipId}</strong>. Double-check the
              URL, or make sure this dealership exists in your folder registry.
            </p>
          </div>
        </main>
        <p className="footer">
          This site is powered by CODEV Marketing and is authorized by S&amp;D
          Wash Management LLC
        </p>
      </div>
    );
  }

  const { data, logoUrl } = entry;

  // Keep this behavior identical to your HTML version
  const dealershipName = data?.preferredName || data?.displayName || data?.legalName || "Dealership";
  const promo = "30";

  const submitForm = async (event) => {
    event.preventDefault();

    const f = fname.trim();
    const l = lname.trim();
    const e = email.trim();

    if (!f || !l || !e) {
      alert("All fields are required.");
      return;
    }

    const formData = {
      fname: f,
      lname: l,
      email: e,
      dealership: dealershipName,
      promo,
      dealershipId: data?.id, // extra helpful field
    };

    setSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      sessionStorage.clear();
      navigate("/success");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page">
      <main className="card-wrapper">
        <div className="form-container">
          {/* First logo (Quick Quack) */}
          <img src={QQlogo} alt="Quick Quack Logo" className="brand-logo" />

          {/* Second logo (dealership logo) */}
          {logoUrl ? (
            <img src={logoUrl} alt="Promotion Logo" className="partner-logo" />
          ) : null}

          <p className="intro-text">
            {dealershipName} has unlocked an exclusive car wash offer for you.
            Enjoy {promo} days free, then $5 off every month after.
          </p>

          <p className="intro-text">
            Enter your information below to receive your promo code by email.
          </p>

          <form onSubmit={submitForm}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              className="input-field"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              className="input-field"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="submit-button" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </main>

      <p className="footer">
        This site is powered by Knockout Promos and is authorized by S&amp;D Wash
        Management LLC
      </p>
    </div>
  );
}
