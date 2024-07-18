import React from "react";
import "../styles/imageCard.css";

const ImageCard = ({ image, handleOpenModal }) => {
  const { id, title, url, date } = image;

  return (
    <>
      <div className="card" key={id}>
        {url.includes("youtube") ? (
          <>
            <h1>VIDEO</h1>
          </>
        ) : (
          <div className="card">
            <div className="card-image-container">
              <div className="card-image">
                <button
                  className="image-button"
                  onClick={() => handleOpenModal(image)}
                >
                  <img src={url} alt={title} width="800" />
                </button>
              </div>
            </div>

            <div className="card-content">
              <div className="card-title">
                <h1>{title}</h1>
              </div>
              <h2>{date}</h2>
            </div>

            {/* <button onClick={() => handleOpenModal(image)}>Details</button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default ImageCard;
