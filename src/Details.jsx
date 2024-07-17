import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundry";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // '_' symbol means note to future self that value is insignificant
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  // Error State
  if (results.isError) {
    return (
      <div className="error-paine">
        <h2 className="error">ERROR!</h2>
      </div>
    );
  }

  // loading state
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} title="Class Component" />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {capitalizeFirstLetter(pet.animal)} - {pet.breed} - {pet.city},{" "}
          {pet.state}
          {/* When button is clicked => setShowModal to true */}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {/* When show modal is true => display modal component */}
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : // When show modal is false => do not display show modal (null)
          null}
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
