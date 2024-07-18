import fetchSearch from "../api/fetchSearch";
import { useQuery } from "@tanstack/react-query";
import Modal from "./Modal";
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundry";
import ImageCard from "./ImageCard";
import "../styles/gallery.css";

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
    <div className="gallery">
      {!images.length ? (
        <h1>No Images Found</h1>
      ) : (
        images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            handleOpenModal={handleOpenModal}
          />
        ))
      )}

      {selectedImage && (
        <Modal onClose={handleCloseModal}>
          <div>
            <h1>{selectedImage.title}</h1>
            <h2>{selectedImage.date}</h2>
            <p>{selectedImage.explanation}</p>
            <button onClick={handleCloseModal}>Exit</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

function ImageListErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <NasaImageList {...props} />
    </ErrorBoundary>
  );
}

export default ImageListErrorBoundary;
