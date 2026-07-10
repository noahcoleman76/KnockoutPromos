import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/promoStyles.css";
import QQlogo from "../markets/automotive/vendors/Quick Quack/qq-logo.png";
import KnockoutLogo from "../assets/Logo White Text White Fist (no BG).png";
import {
  getDealershipById,
} from "../markets/automotive/distributors/dealerships/dealershipRegistry";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxB8gsbZb7466WYQtwyE4CVO_9LQDnjzXZfC8t-Q2QPxwFO9LeAb3PBZPzHPillw84L/exec";

const GENERIC_DEALERSHIP_NAMES = [
  "PRESTMAN AUTO",
  "MARK MILLER SUBARU SOUTHTOWNE",
  "JERRY SEINER BUICK GMC ",
  "YOUNG FORD OGDEN",
  "OREM TOYOTA",
  "KARL MALONE CHRYSLER DODGE JEEP RAM",
  "KARL MALONE FORD PARK CITY",
  "HERITAGE CHRYSLER DODGE JEEP RAM OF LOGAN",
  "JERRY SEINER CHEVROLET ",
  "MARK MILLER TOYOTA",
  "PERFORMANCE FORD LINCOLN BOUNTIFUL",
  "HERITAGE CHRYSLER DODGE JEEP RAM OF BRIGHAM CITY",
  "KARL MALONE TOYOTA",
  "AUTOSAVVY WOODS CROSS",
  "ACTION AUTO OREM",
  "JERRY SEINER KIA SOUTH JORDAN",
  "DOUG SMITH KIA",
  "HERITAGE MOTOR COMPANY",
  "PERFORMANCE TOYOTA BOUNTIFUL",
  "BMW OF MURRAY",
  "LEXUS OF MURRAY",
  "TONY DIVINO TOYOTA",
  "FINDLAY KIA",
  "JERRY SEINER CADILLAC",
  "JERRY SEINER GMC",
  "SALT LAKE VALLEY CHRYSLER DODGE JEEP RAM",
  "MURDOCK FORD SANTAQUIN",
  "TIM DAHLE NISSAN SOUTHTOWNE",
  "VOLKSWAGON SOUTHTOWNE",
  "TIM DAHLE NISSAN MURRAY",
  "MURDOCK HYUNDAI MURRAY",
  "MURDOCK HYUNDAI OF LINDON",
  "MARK MILLER SUBARU MIDTOWN",
  "MURDOCK HYUNDAI OF LOGAN",
  "YOUNG CHRYSLER JEEP DODGE RAM LAYTON",
  "YOUNG SUBARU",
  "STEPHEN WADE CHRYSLER JEEP DODGE RAM",
  "YOUNG CHRYSLER DODGE JEEP RAM OF RIVERDALE",
  "MURDOCK VOLKSWAGEN OF LOGAN",
  "DOUG SMITH CHRYSLER DODGE JEEP RAM - SPANISH FORK",
  "ED KENLEY FORD",
  "STOCKTON 12 HONDA",
  "JERRY SIENER GMC SOUTH JORDAN",
  "NATIONAL GMC BUICK",
  "STEPHEN WADE HONDA/MAZDA",
  "WILSON MOTOR COMPANY",
  "RIVERTON CHEVROLET",
  "YOUNG KIA LAYTON",
  "TIM DAHLE FORD SPANISH FORK",
  "JERRY SEINER KIA SALT LAKE",
  "TIM DAHLE MAZDA MURRAY",
  "VELOCITY AUTO",
  "STRONG VOLKSWAGEN",
  "WASATCH FRONT KIA",
  "SKY FORD OF PROVO",
  "AUTOLOCITY MOTORS",
  "YOUNG HYUNDAI OGDEN",
  "MURDOCK CHEVROLET WOODS CROSS",
  "AUTOMATCH",
  "LOW BOOK SALES",
  "SOUTHTOWNE MITSUBISHI",
  "JERRY SIENER KIA SOUTH JORDAN",
  "DOUG SMITH CHRYSLER DODGE JEEP RAM AMERICAN FORK",
  "DOUG SMITH MITSUBISHI AMERICAN FORK",
  "DOUG SMITH SUBARU AMERICAN FORK",
  "PARKLINE MOTORS",
  "ACTION AUTO LEHI",
  "STEPHEN WADE TOYOTA",
  "GENESIS OF LINDON",
  "AUDI SALT LAKE CITY",
  "MERCEDES-BENZ OF FARMINGTON",
  "CHOICE MOTORS",
  "LABRUM FORD",
  "OREM MAZDA",
  "MURDOCK CHRYSLER DODGE JEEP RAM BOUNTIFUL",
  "AXIO 9000 SOUTH",
  "FINDLAY HYUNDAI ST. GEORGE",
  "USED CAR FACTORY",
  "NATIONAL AUTO PLAZA SOUTHTOWNE",
  "KENTSON CAR COMPANY",
  "SALT LAKE VALLEY CHEVROLET",
  "FINDLAY SUBARU",
  "PLANET AUTO SALES",
  "NEXGEN MOTORS",
  "YOUNG CHEVROLET LAYTON",
  "CEDAR CITY MOTOR COMPANY - FORD",
  "SKY CHRYSLER DODGE JEEP RAM OF PROVO",
  "CAR CITY",
  "CEDAR CITY MOTOR COMPANY - CHRYSLER JEEP DODGE RAM",
  "MURDOCK CHEVROLET BUICK GMC CADILLAC LOGAN",
  "TIM DAHLE INFINITI",
  "AXIO AUTO / RIVERDALE MITSUBISHI",
  "YOUNG TOYOTA LOGAN",
  "STEPHEN WADE CADILLAC",
  "ANDERSON MOTOR CO.",
  "PORSCHE SALT LAKE CITY",
  "RIVERDALE MITSUBISHI",
  "AUTO MARKET",
  "YOUNG BUICK GMC LAYTON",
  "JOHN WATSON CHEVROLET",
  "STEPHEN WADE NISSAN",
  "WASATCH AUTO EXCHANGE",
  "FIUZA MOTORS",
  "GENEROUS AUTO",
  "TIM DAHLE MAZDA SOUTHTOWNE",
  "AXIO EV",
  "AXIO SOUTHTOWNE",
  "MITSUBISHI MOTORS SALT LAKE",
  "KENTSON",
  "BMW PLEASANT GROVE",
  "AXIO AUTO OREM",
  "PERFORMANCE HONDA BOUNTIFUL",
  "HANSEN MOTOR COMPANY",
  "STEPHEN WADE MERCEDES-BENZ",
  "WEST AUTO SALES",
  "RAND'S AUTO SALES",
  "YOUNG FORD BRIGHAM CITY",
  "RC AUTOMOTIVE",
  "READY2GO CARS",
  "YOUNG VOLKSWAGEN",
  "AUDI OF LAYTON",
  "DOUG SMITH CHEVROLET",
  "MIKE HALE ACURA",
  "ASAY'S AUTOS",
  "MURDOCK ACURA",
  "PROVO GMC CADILLAC",
  "SUMMIT TRUCKS",
  "GP MOTOR COMPANY",
  "IDRIVE UTAH",
  "TOOELE MOTOR CHEVY",
  "MOUNTAIN WEST MOTOR",
  "TYACKE MOTORS",
  "ULTIMATE AUTO SALES OF OREM",
  "ASAY AUTO",
  "SKY CHEVROLET",
  "ACCESS AUTO SALES",
  "MERCEDES-BENZ OF ST. GEORGE",
  "CRUMP REESE MOTOR COMPANY",
  "TORRES AUTOMOTIVE GROUP",
  "YOUNG HONDA LOGAN",
  "AUTOSAVVY LINDON",
  "ROBERT JUDD AUTO",
  "LABRUM CHEVROLET",
  "SHAMROCK AUTO GROUP",
  "SUNBURST AUTO SALES",
  "YOUNG FORD MORGAN",
  "FINDLAY VOLKSWAGEN ST. GEORGE",
  "CRS AMERICA",
  "UNIQUE MOTORS ",
  "DAHLE USED AUTOMART MURRAY",
  "ONYX AUTO SALES",
  "TRUCK RANCH West Jordan",
  "AUTOMAXX",
  "RICH'S CARS N CREDIT",
  "HEDBERG SOLOMON AUTO SALES",
  "UTAH MOTOR SPANISH FORK",
  "ST GEORGE AUTO GALLERY",
  "TRUCK RANCH AMERICAN FORK",
  "DASTRUP AUTO",
  "BRADSHAW CHEVROLET BUICK",
  "YOUNG USED CENTER LAYTON",
  "ALTA AUTO SALES",
  "DISCOVER AUTO GROUP",
  "A.I. MONROE AUTO SALES",
  "TOOELE MOTOR FORD",
  "CAR SIMPLE",
  "AUTO BOSS",
  "SECURED AUTO GROUP",
  "SPECIALTIES AUTOMOTIVE GROUP",
  "AVIS CAR SALES OGDEN",
  "AVIS CAR SALES ST GEORGE",
  "YORK AUTOMOTIVE",
  "TOOELE MOTOR CHRYSLER DODGE JEEP RAM",
  "EV AUTO",
  "WADE AUTO GROUP",
  "SR PRIME AUTO",
  "PATRIOT MOTORS",
  "SENCION PERFORMANCE ",
  "SUMMIT AUTO SALES",
  "TITOS AUTO SALES",
  "FIRST CLASS CARS",
  "WATTS AUTOMOTIVE",
  "AVENESYAN MOTORS",
  "PLATINUM AUTO SALES",
  "MUNOZ AUTO SALES",
  "PREMIER CAR & TRUCK",
  "VALLEY MOTORS",
  "WARNER INEOS GRENADIER",
  "BUTTERS AUTO SALES",
  "AUTOMOTIVE SALES AND FINANCE",
  "CU AUTO SALES",
  "MARKOSIAN AUTO",
  "REALITY AUTO SALES",
  "DEALS ON WHEELS",
  "KENTSON CAR COMPANY EV",
  "BERGE AUTO",
  "4 SEASONS AUTO SALES",
  "ENTERPRISE CAR SALES MIDVALE",
  "INCREDIBLE AUTO SALES",
  "HOSKINS TRUCKS",
  "UTAH AUTO PROS",
  "FIND AUTO",
  "UTAH TRUCK COUNTRY",
  "UNLIMITED AUTO SALES",
  "PMR AUTO",
  "REVV AUTO SALES",
  "ACE AUTO UTAH LLC",
  "TRUCK RANCH LOGAN",
  "EXCLUSIVE CARS",
  "IMAGE AUTO",
  "CENTRAL AUTO",
  "DRIVEN AUTO SALES",
  "SECOND CHANCE AUTO",
  "REV MOTORING",
  "DEX AUTO GROUP",
  "HURRICANE CAR LOT",
  "CHICO'S AUTO SALES",
  "AUTO EMPIRE",
  "AUTOFORZA MOTORS",
  "LOTUS SALT LAKE CITY",
  "BEST BUY AUTO",
  "VIP MOTORS",
  "GERDTS AUTO",
  "AUTO SELECT",
  "PAINTER MOTOR CO.",
  "SUMMIT AUTOMOTIVE GROUP",
  "LUCKY'S AUTO CREDIT",
  "CANYON VIEW AUTO SALES",
  "HAMILTON MOTORS",
  "THG AUTO BROKER",
  "HIGH COUNTRY MOTOR CO",
  "IMMACULATE USED CARS",
  "THE CAR-MART",
  "STRICKLAND AUTO",
  "STATE STREET TRUCK STOP",
  "AUTOSAVVY DRAPER",
  "DELGATTI",
  "DRIVETIME OF SALT LAKE CITY",
  "HAACKE MOTORS",
  "ROGERS AUTO SALES",
  "CARGUYZ MOTORS",
  "CURTIS AUTO SALES",
  "UTAH VALLEY TRUCKS",
  "TRI-STATE MOTORS GMC",
  "NATION AUTO GROUP",
  "CARHAUTO",
  "CAR MATCH",
  "AUTO HAVEN",
  "KAPP AUTO SALES- CLINTON",
  "SPECIALTIES AUTOMOTIVE GROUP, LLC",
  "SAINT MOTORS",
  "EVOLUTION AUTO SALES",
  "AUTOBAHN MOTORS CORP",
  "ALPINE OVERLAND",
  "SUPREME AUTOMOTIVE",
  "LITHIUM AUTO",
  "REVOLUTIONARY AUTO",
  "CAR AUTOS UTAH LLC",
  "FAMILY AUTO SLC",
  "KAPP AUTO SALES",
  "ROBERT MARSH CAR & TRUCK SALES",
  "SMART BUY AUTO SALES",
  "SUNSET AUTO SALES",
  "AUTO PASSION TEAM",
  "FIREHOUSE AUTO SALES",
  "SS AUTO BROKERS",
  "ST. GEORGE DIXIE MOTORS",
  "RIDEOUT AUTO SALES",
  "TONY DIVINO USED CARS",
  "CARZILLA ",
  "CARNOVA",
  "MOMENTUM MOTORS",
  "UNLIMITED AUTOMOTIVE",
  "WESTGATE AUTO SALES",
  "AUTO CLUB",
  "TIM DAHLE NISSAN BOUNTIFUL",
  "BEUTLER AUTO",
  "BLUFF STREET AUTO BROKERS",
  "NET SALES AUTO",
  "SUPER AUTOSS",
  "ZOOM AUTO SALES",
  "MONUMENT MOTOR CO",
  "CARBOYS",
  "ONE CARS UTAH",
  "FUENTAS AUTO SALES",
  "DROUBAY CHEVROLET",
  "U-SAVE AUTO SALES",
  "THE RIGHT PLACE AUTO",
  "EDGE AUTOMOTIVE",
  "REDLINE",
  "INTERMOUNTAIN MOTORS",
  "DEALER WORLD",
  "SMALL TOWN AUTO SALES",
  "DUBS AUTO",
  "1NATION AUTO",
  "JKW MOTORS",
  "L&S AUTO BROKERS",
  "MOUNTAIN AUTO SLC",
  "PABLOS AUTO SALES",
  "KONIG AUTOMOTIVE GROUP",
  "MY PLANET AUTO",
  "TAPIA AUTO SALES",
  "HUNTER MOTORSPORTS",
  "GHOSTX AUTO",
  "MAKES AND MODELS OF SALT LAKE CITY",
  "TEAM D AUTO SALES",
  "TW AUTO",
  "EZ AUTO SALES",
  "INTEGRITY MOTORS",
  "AUTOMAX OF MIDVALE",
  "MAJOR MOTORS",
  "PERFORMANCE MOTORS",
  "DRIVE N BUY AUTO SALES",
  "UTAH DRIVE MOTORS",
  "UTAH PRO AUTO SALES",
  "D&K MOTORS",
  "CARTOWN",
  "GOOD-ONE AUTO SALES",
  "RIGHT DEAL AUTO SALES",
  "YOUR BUDGET AUTO SALES",
  "SUPREME CAR SALES",
  "B&B MOTORS",
  "SELECT AUTO IMPORTS",
  "PRIME AUTO",
  "PURE AUTO",
  "A LOT OF CARS",
  "ATLAS MOTORS",
  "AUTO EXPO LLC",
  "BITTON'S AUTO SALES",
  "CR CARS LLC",
  "HATCHCO",
  "AUTO GROUP DIRECT",
  "ALL-STAR AUTO BROKERS",
  "ACC NEXT STEP AUTO",
  "GREEN LIGHT MOTOR COMPANY",
  "AUTOS 360",
  "CASA SALVAJE AUTO SALES",
  "UNITED AUTO SALES",
  "HIGH 5 AUTO SALES",
  "K AND J AUTO",
  "MG AUTO SALES INC",
  "PREMIER MOTORSPORTS",
  "UTAH CAR & TRUCK",
  "HARDMAN CAR COMPANY",
  "HIGHLAND MOTORS",
  "LUMEN MOTORS",
  "ELOZ AUTO",
  "ZOE AUTO",
  "DESERT OASIS AUTO",
  "CLEAN FUELS UTAH",
  "PACHECO MOTORS",
  "CAR2SEEK SALT LAKE CITY AUTOS",
  "ALICO AUTO",
  "ABC MOTOR SALES",
  "BIZ AUTO",
  "AS AUTOMOTIVE",
  "DYNAMIC MOTORSPORTS",
  "DYNAMIC DEALERSHIP",
  "ABC MOTORS",
  "AMERICA AUTO GROUP",
  "APEX MOTORS",
  "FIOMARDI",
  "EAGLE AUTO SALES",
  "MATRIX MOTORS",
  "SOUTHERN UTAH CAR AND TRAILER SALES",
  "BAIRD MOTORS",
  "TWIN MOTORS",
  "AFFORDABLE AUTO SALES"
];

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
    return GENERIC_DEALERSHIP_NAMES.map((name) => ({
      id: name,
      name,
    }));
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
                        filteredDealerships.map((d) => (
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
                        ))
                      ) : (
                        <div className="dealership-empty">
                          No matching dealerships found.
                        </div>
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
