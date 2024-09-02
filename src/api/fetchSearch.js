async function fetchSearch({ queryKey }) {
  const { startDate, endDate } = queryKey[1];

  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  const api_uri = "https://api.nasa.gov/planetary/apod";

  const res = await fetch(
    `${api_uri}?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
  );

  if (!res.ok) {
    throw new Error(
      `Image search failed: ${api_uri}, ${startDate} - ${endDate}`
    );
  }
  return res.json();
}

export default fetchSearch;
