// Build API url with explicit fields to avoid 400 from strict API instances
// We request only the fields the app uses: name, region, flags, population, cca3, ccn3
const FIELDS = 'name,region,flags,population,cca3,ccn3';

const baseAll = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;
const baseName = (name) =>
  `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fields=${FIELDS}`;
const baseRegion = (r) =>
  `https://restcountries.com/v3.1/region/${encodeURIComponent(r)}?fields=${FIELDS}`;

export function buildUrl({ search, region }) {
  // When a search string is present (length >= 1) use the name endpoint
  if (search && search.length >= 1) {
    return baseName(search);
  }

  if (region && region.toLowerCase() !== 'all') {
    return baseRegion(region);
  }

  return baseAll;
}