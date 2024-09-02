async function fetchPhoto() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  const api_uri = "https://api.nasa.gov/planetary/apod";

  const endpoint = `${api_uri}?api_key=${apiKey}`;
  const response = await fetch(endpoint);

  return response.json();
}

export default fetchPhoto;
