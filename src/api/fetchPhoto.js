const api_key = "OLKx4hdZAXy4zLA8NjhE416FhGAvbsQZvfg1We45";
const api_uri = "https://api.nasa.gov/planetary/apod";
const date = "2022-03-25";

async function fetchPhoto({ queryKey }) {
  const id = queryKey[1];
  const response = await fetch(`${api_uri}?api_key=${api_key}&date=${date}`);
  console.log(response);

  if (!response.ok) {
    throw new Error(`images/${id} fetch not ok`);
  }

  return response.json();
}

export default fetchPhoto;
