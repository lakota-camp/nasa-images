const api_key = "LxEWxX6gnOxzrfn2NzcHjQMEF5cL0HZhKFLWcyoO";
const api_uri = "https://api.nasa.gov/planetary/apod";

async function fetchPhoto() {
  // const endpoint = date
  // ? `${api_uri}?api_key=${api_key}&date=${date}`
  // : `${api_uri}?api_key=${api_key}`;

  const endpoint = `${api_uri}?api_key=${api_key}`;
  const response = await fetch(endpoint);

  return response.json();
}

export default fetchPhoto;
