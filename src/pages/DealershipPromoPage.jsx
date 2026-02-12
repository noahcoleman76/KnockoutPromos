import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/promoStyles.css";
import QQlogo from "../markets/automotive/vendors/Quick Quack/qq-logo.png";
import KnockoutLogo from "../assets/Logo White Text White Fist (no BG).png";
import {
  getDealershipById,
  getAllDealershipEntries,
} from "../markets/automotive/distributors/dealerships/dealershipRegistry";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxB8gsbZb7466WYQtwyE4CVO_9LQDnjzXZfC8t-Q2QPxwFO9LeAb3PBZPzHPillw84L/exec";

export default function DealershipPromoPage({ generic = false }) {
  const navigate = useNavigate();
  const { dealershipId } = useParams();

  // if the route is /dealershippromo, we want generic behavior
  const isGeneric = generic === true;

  // For normal mode, we resolve a dealership entry from the URL param
  const entry = useMemo(() => {
    if (isGeneric) return null;
    return getDealershipById(dealershipId);
  }, [dealershipId, isGeneric]);

  // For generic mode dropdown options
  const dealershipOptions = useMemo(() => {
    const entries = getAllDealershipEntries?.() || [];

    // Build base list
    const options = entries
      .map(({ data }) => {
        const name =
          data?.preferredName ||
          data?.displayName ||
          data?.legalName ||
          data?.id ||
          "";

        return {
          id: data?.id || "",
          name,
        };
      })
      // ❌ Remove invalid + template entries
      .filter(
        (d) =>
          d.id &&
          d.name &&
          d.name.toLowerCase() !== "template" &&
          d.id.toLowerCase() !== "template"
      )
      // 🔤 Alphabetical
      .sort((a, b) => a.name.localeCompare(b.name));

    // ✅ Append "Other" to the very end
    options.push({
      id: "other",
      name: "Other",
    });

    return options;
  }, []);


  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDealershipId, setSelectedDealershipId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [dealershipSearch, setDealershipSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredDealerships = dealershipOptions.filter((d) =>
    d.name.toLowerCase().includes(dealershipSearch.toLowerCase())
  );

  useEffect(() => {
    sessionStorage.clear();
    setFname("");
    setLname("");
    setEmail("");
    setSelectedDealershipId("");
  }, [dealershipId, isGeneric]);

  // If not generic and invalid dealershipId -> show not found
  if (!isGeneric && !entry) {
    return (
      <div className="page promo-scope">
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

  const promo = "30";

  // Resolve dealershipName + dealershipId for submission based on mode
  const resolved = useMemo(() => {
    if (!isGeneric) {
      const { data } = entry || {};
      const name =
        data?.preferredName || data?.displayName || data?.legalName || "Dealership";
      return { id: data?.id || dealershipId || "", name };
    }

    // generic mode: find selected
    const picked = dealershipOptions.find((d) => d.id === selectedDealershipId);
    return {
      id: picked?.id || "",
      name: picked?.name || "Dealership",
    };
  }, [isGeneric, entry, dealershipId, dealershipOptions, selectedDealershipId]);

  const submitForm = async (event) => {
    event.preventDefault();

    const f = fname.trim();
    const l = lname.trim();
    const e = email.trim();

    if (!f || !l || !e) {
      alert("All fields are required.");
      return;
    }

    if (isGeneric && !resolved.id) {
      alert("Please select your dealership.");
      return;
    }

    const formData = {
      fname: f,
      lname: l,
      email: e,
      dealership: resolved.name,
      promo,
      dealershipId: resolved.id,
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
    <div className="page promo-scope">
      <main className="card-wrapper">
        <div className="form-container">
          <header className="promo-header">
            <div className="qq-header">
              <img src={QQlogo} alt="Quick Quack Logo" className="brand-logo" />
            </div>

            {!isGeneric && entry?.logoUrl ? (
              <div className="logo-plate">
                <img
                  src={entry.logoUrl}
                  alt="Promotion Logo"
                  className="partner-logo"
                />
              </div>
            ) : null}
          </header>

          <div className="promo-copy">
            <p className="headline">
              {isGeneric
                ? `Your dealership has unlocked an exclusive car wash offer for you.`
                : `${resolved.name} has unlocked an exclusive car wash offer for you.`}
            </p>

            <p className="subhead">
              Enjoy <strong>{promo} days free</strong>, then <strong>$5 off</strong> every month after.
            </p>

            <p className="intro-text">
              Enter your information below to receive your promo code by email.
            </p>
          </div>

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

            {/* ✅ Searchable Dealership Selector (scoped) */}
            {isGeneric ? (
              <>
                <label htmlFor="dealershipSearch">Dealership</label>

                <div className="dealership-search">
                  <input
                    id="dealershipSearch"
                    type="text"
                    className="input-field"
                    placeholder="Search your dealership..."
                    value={dealershipSearch}
                    onChange={(e) => {
                      setDealershipSearch(e.target.value);
                      setShowResults(true);
                      setSelectedDealershipId("");
                    }}
                    onFocus={() => setShowResults(true)}
                    onBlur={() => {
                      window.setTimeout(() => setShowResults(false), 120);
                    }}
                    autoComplete="off"
                    required={!selectedDealershipId}
                  />

                  {showResults && dealershipSearch && (
                    <div className="dealership-results" role="listbox">
                      {filteredDealerships.length > 0 ? (
                        <>
                          {filteredDealerships.map((d) => (
                            <button
                              key={d.id}
                              type="button"
                              className="dealership-item"
                              role="option"
                              onMouseDown={() => {
                                setDealershipSearch(d.name);
                                setSelectedDealershipId(d.id);
                                setShowResults(false);
                              }}
                            >
                              {d.name}
                            </button>
                          ))}

                          <div className="dealership-divider" />

                          <button
                            type="button"
                            className="dealership-item dealership-other"
                            onMouseDown={() => {
                              setDealershipSearch("Other");
                              setSelectedDealershipId("other");
                              setShowResults(false);
                            }}
                          >
                            Dealership Not Listed
                          </button>
                        </>
                      ) : (
                        <>

                          <button
                            type="button"
                            className="dealership-item dealership-other"
                            onMouseDown={() => {
                              setDealershipSearch("Other");
                              setSelectedDealershipId("other");
                              setShowResults(false);
                            }}
                          >
                            Dealership Not Listed
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* keep the chosen id available for submit/debug */}
                <input type="hidden" name="dealershipId" value={selectedDealershipId} />
              </>
            ) : null}


            <button type="submit" className="submit-button" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </main>

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
    </div>
  );
}
