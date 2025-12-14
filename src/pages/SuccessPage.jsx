import React from "react";
import QQlogo from "../markets/automotive/vendors/Quick Quack/QQlogo.png"; // adjust path if needed
import "../styles/promoStyles.css"

export default function SuccessPage() {
  return (
    <div className="page promo-scope">
      <main className="card-wrapper">
        <div className="form-container">
          <h1 className="thankyou">Thank You!</h1>

          <p className="intro-text">We received your submission successfully.</p>

          <div className="delivery-box" role="status" aria-live="polite">
            <div className="delivery-title">Your promo code is on the way</div>
            <div className="delivery-text">
              You’ll receive an email with your unique promo code within{" "}
              <strong>24 hours</strong>.
            </div>
          </div>

          <div className="nextSteps">
            <h2 className="next-title">What’s Next?</h2>

            <ul className="next-list">
              <li>
                Check your email (and spam/junk) within <strong>24 hours</strong>.
              </li>
              <li>
                Use the promo code in that email to activate your wash benefit and
                follow the instructions.
              </li>
              <li>
                Questions or issues? Email us at{" "}
                <strong>noah@knockoutpromos.com</strong> and we’ll help you out.
              </li>
            </ul>
          </div>

          <img src={QQlogo} alt="Quick Quack Logo" className="brand-logo" />
        </div>
      </main>

      <p className="footer">
        This site is powered by CoDev Marketing and is authorized by S&amp;D Wash
        Management LLC
      </p>
    </div>
  );
}
