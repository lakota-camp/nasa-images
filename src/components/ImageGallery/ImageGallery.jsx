import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// Components
import ErrorBoundary from "../Error/ErrorBoundary";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ImageCard from "../ImageCard/ImageCard";
import LoadingMessage from "../Loading/LoadingMessage";
import ErrorMessage from "../Error/ErrorMessage";
// Functions
import fetchSearch from "../../api/fetchSearch";
// Styles
import styles from "./Gallery.module.scss";

/**
 * Custom hook that returns the query parameters from the current URL.
 *
 * @returns {URLSearchParams} The URLSearchParams object containing the query parameters.
 */
const useQueryParams = () => {
  return new URLSearchParams(window.location.search);
};

// FIXME: adjust this section - understand the functionality
const ImageGallery = () => {
  // Call useLocation: Represents the current location of the application.
  const location = useLocation();

  // Call useQuery to fetch startDate and endDate from url params
  const queryParams = useQueryParams();
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");

  // Destructure from useQuery: error, loading, data and refetch function
  const { isError, isLoading, data, refetch } = useQuery(
    ["images", { startDate, endDate }],
    fetchSearch,
    { enabled: false } // Disable automatic query
  );

  // useEffect to trigger search when dates are changed in the query params
  useEffect(() => {
    if (startDate && endDate) {
      refetch();
    }
  }, [startDate, endDate, refetch, location.search]);

  // Selected image state for image details on modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Error and loading messages
  if (isError) {
    return <ErrorMessage />;
  }
  if (isLoading) {
    return <LoadingMessage />;
  }

  const images = data ?? [];

  // Modal functions
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
