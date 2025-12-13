// src/markets/automotive/distributors/dealerships/<dealership-slug>/dealership.data.js

export const dealership = {
  // --- Identity ---
  id: "alpineoverland", // slug / folder name (unique key)
  market: "automotive",
  distributorType: "dealership",

  // --- Names ---
  legalName: "Alpine Overland",
  displayName: "Alpine Overland",
  preferredName: "Alpine Overland",
  shortName: "Alpine Overland",

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
      name: "Ryan Geertsen",
      title: "",
      phone: "",
      email: "ryang@alpineoverland.com",
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
    address1: "10970 S State St",
    address2: "",
    city: "Sandy",
    state: "UT",
    postalCode: "84070",
    country: "US",
  },

  // --- Web presence ---
  web: {
    website: "https://www.alpineoverland.com/",
    googleMapsUrl: "https://www.google.com/maps/place/Alpine+Overland/@40.6002936,-111.9065139,20z/data=!4m6!3m5!1s0x87528987fd062e97:0x44757740ea88fe05!8m2!3d40.5526198!4d-111.8917343!16s%2Fg%2F11tfyty7l0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
    social: {
      instagram: "",
      facebook: "",
      tiktok: "",
      youtube: "",
    },
  },
};
