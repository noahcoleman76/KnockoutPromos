// Auto-load all dealership data + logos under:
// src/markets/automotive/distributors/dealerships/*/

// Load all data modules
const dataModules = import.meta.glob(
  "./*/dealership.data.js",
  { eager: true }
);

// Load all logos
const logoModules = import.meta.glob(
  "./*/logo.png",
  { eager: true, as: "url" }
);

/**
 * Build a registry like:
 * {
 *   lowbooksales: { data: {...}, logoUrl: "..." },
 *   asbury: { data: {...}, logoUrl: "..." }
 * }
 */
const registry = {};

for (const [path, mod] of Object.entries(dataModules)) {
  const data = mod.dealership;

  if (!data?.id) continue;

  // Convert ".../lowbooksales/dealership.data.js" -> ".../lowbooksales/logo.png"
  const logoPath = path.replace("/dealership.data.js", "/logo.png");
  const logoUrl = logoModules[logoPath] || null;

  registry[data.id] = {
    data,
    logoUrl,
  };
}

export function getDealershipById(id) {
  return registry[id] || null;
}

export function getAllDealerships() {
  return Object.values(registry).map((x) => x.data);
}

export function getDealershipIds() {
  return Object.keys(registry);
}
