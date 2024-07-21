import fetchSearch from "../../api/fetchSearch";
import { useQuery } from "@tanstack/react-query";
import Modal from "../Modal/Modal";
import { useState } from "react";
import ErrorBoundary from "../Error/ErrorBoundary";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./Gallery.module.scss";
import Button from "../Button/Button";
import LoadingMessage from "../Loading/LoadingMessage";
import ErrorMessage from "../Error/ErrorMessage";

const ImageGallery = () => {
  const results = useQuery(["images"], fetchSearch);
  const [selectedImage, setSelectedImage] = useState(null);

  if (results.isError) {
    return <ErrorMessage />;
  }

  if (results.isLoading) {
    return <LoadingMessage />;
  }

  const images = results?.data ?? [];

  const handleOpenModal = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      {!images.length ? (
        <h1>No Images Found</h1>
      ) : (
        images
          .toReversed()
          .map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              handleOpenModal={handleOpenModal}
            />
          ))
      )}

      {selectedImage && (
        <Modal onClose={handleCloseModal}>
          <h1 className={styles.heading}>{selectedImage.title}</h1>
          <h2 className={styles.subHeading}>{selectedImage.date}</h2>
          <p className={styles.body}>{selectedImage.explanation}</p>
          <Button action={handleCloseModal} text="Exit" />
        </Modal>
      )}
    </div>
  );
};

function ImageGalleryErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <ImageGallery {...props} />
    </ErrorBoundary>
  );
}

export default ImageGalleryErrorBoundary;
