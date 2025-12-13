// src/markets/automotive/distributors/dealerships/<dealership-slug>/dealership.data.js

export const dealership = {
  // --- Identity ---
  id: "markmillersubaru", // slug / folder name (unique key)
  market: "automotive",
  distributorType: "dealership",

  // --- Names ---
  legalName: "Mark Miller Subaru Southtowne",
  displayName: "Mark Miller Subaru Southtowne",
  preferredName: "Mark Miller Subaru",
  shortName: "Mark Miller Subaru",

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
