const api_key = "OLKx4hdZAXy4zLA8NjhE416FhGAvbsQZvfg1We45";
const api_uri = "https://api.nasa.gov/planetary/apod";
const startDate = "2024-07-04";

async function fetchSearch() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startDate}`
  );

  if (!res.ok) {
    throw new Error(`Image search ${api_uri}, ${startDate}`);
  }
  return res.json();
}

export default fetchSearch;
