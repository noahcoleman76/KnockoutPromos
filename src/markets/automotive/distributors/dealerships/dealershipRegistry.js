// src/markets/automotive/distributors/dealerships/dealershipRegistry.js

// Load all dealership data modules
const dataModules = import.meta.glob("./*/dealership.data.js", {
  eager: true,
});

// Load all logos as URL strings (NEW syntax)
const logoModules = import.meta.glob("./*/logo.png", {
  eager: true,
  query: "?url",
  import: "default",
});

/**
 * registry:
 * {
 *   prestman: { data: {...}, logoUrl: "..." },
 *   asbury:   { data: {...}, logoUrl: "..." }
 * }
 */
const registry = {};

for (const [dataPath, mod] of Object.entries(dataModules)) {
  const data =
    mod?.dealership ??
    mod?.default?.dealership ??
    mod?.default ??
    null;

  if (!data?.id) continue;

  // "./PrestmanAuto/dealership.data.js" -> "./PrestmanAuto"
  const folderPath = dataPath.replace("/dealership.data.js", "");

  // Build exact key Vite uses for logo glob
  const logoKey = `${folderPath}/logo.png`;

  const logoUrl = logoModules[logoKey] ?? null;

  registry[data.id] = {
    data,
    logoUrl,
  };
}

export function getDealershipById(id) {
  return registry[id] || null;
}

// ✅ Use this for dropdowns, lists, etc.
export function getAllDealershipEntries() {
  return Object.values(registry);
}

export function getAllDealerships() {
  return Object.values(registry).map((x) => x.data);
}

export function getDealershipIds() {
  return Object.keys(registry);
}
