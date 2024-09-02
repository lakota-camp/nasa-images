import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "../src/components/Error/ErrorBoundary";
import Modal from "../src/components/Modal/Modal";
import fetchPhoto from "../src/api/fetchPhoto";

const Details = () => {
  const [showModal, setShowModal] = useState(false);

  // '_' symbol means note to future self that value is insignificant
  // eslint-disable-next-line no-unused-vars

  const { id } = useParams();
  const results = useQuery(["details", id], fetchPhoto);

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
  const pet = results.data;

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {/* Display image details here */}
          {/* When button is clicked => setShowModal to true */}
          <button onClick={() => setShowModal(true)}>Details *image*</button>
          <p>image description here</p>
          {/* When show modal is true => display modal component */}
          {showModal ? (
            <Modal>
              <div>
                <h1>Details</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Exit
                  </button>
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
