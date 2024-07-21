import React from "react";
import styles from "./imageCard.module.scss";
const ImageCard = ({ image, handleOpenModal }) => {
  const { id, title, url } = image;

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
                <button
                  className={styles.imageButton}
                  onClick={() => handleOpenModal(image)}
                >
                  <img src={url} alt={title} width="800" />
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
