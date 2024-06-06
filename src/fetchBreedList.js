const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?id=${animal}`);

  if (!animal) return [];

  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch not ok`);
  }

  return apiRes.json(); // returns promise
};

export default fetchBreedList;
