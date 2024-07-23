// const startDate = "2024-07-04";
// const endDate = "2024-07-16";

async function fetchSearch({ queryKey }) {
  console.log("query key:", queryKey);
  const { startDate, finalEndDate } = queryKey[1];
  // console.log("query Key:", queryKey[1]);
  const api_key = "OLKx4hdZAXy4zLA8NjhE416FhGAvbsQZvfg1We45";
  const api_uri = "https://api.nasa.gov/planetary/apod";
  // Check if end date is given
  const url = finalEndDate
    ? `${api_uri}?api_key=${api_key}&start_date=${startDate}&${finalEndDate}`
    : `${api_uri}?api_key=${api_key}&start_date=${startDate}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Image search failed: ${api_uri}, ${startDate} - ${finalEndDate}`
    );
  }
  return res.json();
}

export default fetchSearch;
