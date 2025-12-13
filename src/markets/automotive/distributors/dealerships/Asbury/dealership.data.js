// src/markets/automotive/distributors/dealerships/<dealership-slug>/dealership.data.js

export const dealership = {
  // --- Identity ---
  id: "asbury", // slug / folder name (unique key)
  market: "automotive",
  distributorType: "dealership",

  // --- Names ---
  legalName: "Asbury Automotive Group, Inc",
  displayName: "Asbury Auto",
  preferredName: "Asbury Auto",
  shortName: "Asbury Auto",

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
      name: "Jessica Kunz",
      title: "Head of Marketing",
      phone: "",
      email: "jkuns@asburyauto.com",
    },
    secondary: {
      name: "Brandon Jenkins",
      title: "Utah Marketing",
      phone: "(801) 979-9914",
      email: "brandon.jenkins@asburyauto.com",
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
    country: "US",
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
