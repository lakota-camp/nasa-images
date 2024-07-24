async function fetchSearch({ queryKey }) {
  console.log("query key:", queryKey);
  const { startDate, endDate } = queryKey[1];

  const api_key = "OLKx4hdZAXy4zLA8NjhE416FhGAvbsQZvfg1We45";
  const api_uri = "https://api.nasa.gov/planetary/apod";

  const res = await fetch(
    `${api_uri}?api_key=${api_key}&start_date=${startDate}&end_date=${endDate}`
  );

  if (!res.ok) {
    throw new Error(
      `Image search failed: ${api_uri}, ${startDate} - ${endDate}`
    );
  }
  return res.json();
}

export default fetchSearch;
