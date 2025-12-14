import React from "react";
import { Link } from "react-router-dom";

// Adjust path if your registry lives elsewhere
import {
  getAllDealerships,
} from "../markets/automotive/distributors/dealerships/dealershipRegistry";

export default function LinksPage() {
  const dealerships = getAllDealerships();

  return (
    <div style={{ padding: "32px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "8px" }}>Dealership Links</h1>
      <p style={{ marginBottom: "24px", color: "#9ca3af" }}>
        Internal-use page — all active dealership promo URLs.
      </p>

      {dealerships.length === 0 ? (
        <p>No dealerships found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {dealerships.map((dealer) => {
            const name =
              dealer.preferredName ||
              dealer.displayName ||
              dealer.legalName ||
              dealer.id;

            const url = `/${dealer.id}`;

            return (
              <li
                key={dealer.id}
                style={{
                  padding: "14px 16px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>{name}</strong>
                  <div style={{ fontSize: "13px", color: "#9ca3af" }}>
                    {url}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  {/* Internal navigation */}
                  <Link
                    to={url}
                    style={{
                      color: "#ec2326",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Open
                  </Link>

                  {/* Absolute URL for copying */}
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#9ca3af",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    New tab
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
