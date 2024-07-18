import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhoto from "../api/fetchPhoto";
import Modal from "./Modal";

const NasaImageOfTheDay = () => {
  const results = useQuery(["imageDetails"], fetchPhoto);
  const [showModal, setShowModal] = useState(false);

  if (results.isError) {
    return <h2>ERROR!!!</h2>;
  }

  if (results.isLoading) {
    return <h2>Loading...</h2>;
  }

  const image = results.data;
  console.log(image);

  return (
    <>
      <div className="image-of-the-day-card">
        {/* Header */}
        <h2>{image.title}</h2>
        <h3>{image.date}</h3>

        {/* Image / Video */}
        {image.url.includes("youtube") ? (
          <iframe src={image.url} title={image.title}></iframe>
        ) : (
          <button className="image-button" onClick={() => setShowModal(true)}>
            <img src={image.url} alt={image.title} />
          </button>
        )}
      </div>
      {/* Details button */}
      {/* <button onClick={() => setShowModal(true)}>Details</button> */}
      {/* Modal */}

      {showModal ? (
        <Modal>
          <h1>{image.title}</h1>
          <h2>{image.date}</h2>
          <h2>{image.explanation}</h2>
          <div className="buttons">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Exit
            </button>
          </div>
        </Modal>
      ) : // When show modal is false => do not display show modal (null)
      null}
    </>
  );
};
export default NasaImageOfTheDay;
