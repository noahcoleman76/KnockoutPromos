// src/markets/automotive/distributors/dealerships/<dealership-slug>/dealership.data.js

export const dealership = {
  // --- Identity ---
  id: "mazdasouthtowne", // slug / folder name (unique key)
  market: "automotive",
  distributorType: "dealership",

  // --- Names ---
  legalName: "Tim Dahle Mazda Southtowne",
  displayName: "Tim Dahle Mazda Southtowne",
  preferredName: "Tim Dahle Mazda Southtowne",
  shortName: "Mazda Southtowne",

  // --- Partnership / ops ---
  partnership: {
    startDate: "2025-11-25", // YYYY-MM-DD
    status: "active", 
    notes: "",
  },

  metrics: {
    avgCarsSoldPerMonth: null, 
    avgServiceTicketsPerMonth: null, 
  },

  materials: {
    deliverables: [
      { type: "qr-card-doorhanger", quantity: 100, frequency: "monthly" },
    ],
  },

  // --- Contacts ---
  contacts: {
    primary: {
      name: "",
      title: "",
      phone: "",
      email: "",
    },
    secondary: {
      name: "",
      title: "",
      phone: "",
      email: "",
    },
    other: [
      // { name: "", title: "", phone: "", email: "", notes: "" }
    ],
  },

  // --- Location ---
  location: {
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },

  // --- Web presence ---
  web: {
    website: "",
    googleMapsUrl: "",
    social: {
      instagram: "",
      facebook: "",
      tiktok: "",
      youtube: "",
    },
  },
};
