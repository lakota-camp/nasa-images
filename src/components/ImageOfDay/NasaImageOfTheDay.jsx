import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhoto from "../../api/fetchPhoto";
import Modal from "../Modal/Modal";
import styles from "./imageOfTheDay.module.scss";
import Button from "../Button/Button";
import ErrorMessage from "../Error/ErrorMessage";
import LoadingMessage from "../Loading/LoadingMessage";

const NasaImageOfTheDay = () => {
  const results = useQuery(["imageDetails"], fetchPhoto);
  const [showModal, setShowModal] = useState(false);

  if (results.isError) {
    return <ErrorMessage />;
  }

  if (results.isLoading) {
    return <LoadingMessage />;
  }

  const image = results.data;

  return (
    <>
      {/* Container */}
      <div className={styles.container}>
        <div className={styles.container}>
          <div className={`${styles.header} font-xl`}>
            <h2>{image.title}</h2>
            <h3>{image.date}</h3>
          </div>
          {/* Img Content */}
          <div className={styles.content}>
            {/* Image / Video */}
            {image.url.includes("youtube") ? (
              <iframe src={image.url} title={image.title}></iframe>
            ) : (
              <button
                className={styles.imageButton}
                onClick={() => setShowModal(true)}
              >
                <img src={image.url} alt={image.title} />
              </button>
            )}
          </div>
        </div>
        {/* Header */}
      </div>
      {/* Details button */}
      {/* <button onClick={() => setShowModal(true)}>Details</button> */}
      {/* Modal */}

      {showModal ? (
        <Modal>
          <h1>{image.title}</h1>
          <h2>{image.date}</h2>
          <h2>{image.explanation}</h2>
          <Button
            action={() => {
              setShowModal(false);
            }}
            text="Exit"
          />
        </Modal>
      ) : // When show modal is false => do not display show modal (null)
      null}
    </>
  );
};
export default NasaImageOfTheDay;
