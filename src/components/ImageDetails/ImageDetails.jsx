import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhoto from "../../api/fetchPhoto";
import Modal from "../Modal/Modal";
import ErrorMessage from "../Error/ErrorMessage";
import LoadingMessage from "../Loading/LoadingMessage";

const ImageDetails = () => {
  const date = "2015-03-25";
  const results = useQuery(["imageDetails"], fetchPhoto(date));
  const [showModal, setShowModal] = useState(false);

  if (results.isError) {
    return <ErrorMessage />;
  }

  if (results.isLoading) {
    return <LoadingMessage />;
  }

  const image = results.data;
  console.log(image);

  return (
    <>
      <div>
        <h2>{image.title}</h2>
        <h3>Date: {image.date}</h3>
        {image.url.includes("youtube") ? (
          <iframe src={image.url} title={image.title}></iframe>
        ) : (
          <button onClick={() => setShowModal(true)}>
            <img src={image.url} alt={image.title} width="500" height="500" />
          </button>
        )}
      </div>
      <button onClick={() => setShowModal(true)}>Details *image*</button>

      {showModal ? (
        <Modal>
          <div>
            <h1>Explanation</h1>
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
          </div>
        </Modal>
      ) : // When show modal is false => do not display show modal (null)
      null}
    </>
  );
};

export default ImageDetails;
