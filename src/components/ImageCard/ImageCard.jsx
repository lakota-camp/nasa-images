import React, { useState } from "react";
import styles from "./imageCard.module.scss";
import LoadingMessage from "../Loading/LoadingMessage";

const ImageCard = ({ image, handleOpenModal }) => {
  const { id, title, url } = image;
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className={styles.card} key={id}>
        {url.includes("youtube") ? (
          <>
            <h1>VIDEO</h1>
          </>
        ) : (
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <div className={styles.cardImage}>
                {isLoading && <LoadingMessage />}
                <button
                  className={styles.imageButton}
                  onClick={() => handleOpenModal(image)}
                >
                  <img
                    src={url}
                    alt={title}
                    width="800"
                    onLoad={handleImageLoad}
                    style={{ display: isLoading ? "none" : "block" }}
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageCard;
