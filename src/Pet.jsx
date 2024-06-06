import { capitalizeFirstLetter } from "../utils/stringUtils";
import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/non.jpeg";
  if (images.length) {
    hero = images[0];
  }

  // Pet component

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {capitalizeFirstLetter(animal)} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
