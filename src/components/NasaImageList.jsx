import fetchSearch from "../api/fetchSearch";
import { useQuery } from "@tanstack/react-query";
import Modal from "./Modal";
import { useState } from "react";

const NasaImageList = () => {
  const results = useQuery(["images"], fetchSearch);
  const [selectedImage, setSelectedImage] = useState(null);

  if (results.isError) {
    return <h2>ERROR!!!</h2>;
  }

  if (results.isLoading) {
    return <h2>Loading...</h2>;
  }

  const images = results?.data ?? [];

  const handleOpenModal = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-list">
      {!images.length ? (
        <h1>No Images Found</h1>
      ) : (
        images.map((image) => (
          <div key={image.id}>
            {image.url.includes("youtube") ? (
              <iframe src={image.url} title={image.title}></iframe>
            ) : (
              <>
                <h1>{image.title}</h1>
                <h2>{image.date}</h2>
                <button
                  className="image-button"
                  onClick={() => handleOpenModal(image)}
                >
                  <img src={image.url} alt={image.title} width="800" />
                </button>

                {/* <button onClick={() => handleOpenModal(image)}>Details</button> */}
              </>
            )}
          </div>
        ))
      )}

      {selectedImage && (
        <Modal onClose={handleCloseModal}>
          <div>
            <h1>{selectedImage.title}</h1>
            <p>{selectedImage.explanation}</p>
            <button onClick={handleCloseModal}>Exit</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NasaImageList;
