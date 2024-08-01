import ImageGallery from "../components/ImageGallery/ImageGallery";
import styles from "./Page.module.scss";

const Gallery = ({ startDate, endDate }) => {
  const headline =
    startDate && endDate
      ? `Image of the Day from ${startDate} to ${endDate}`
      : "Image Gallery";
  // FIXME: Make 'Image Gallery' headline dynamic - changing with the user selected dates
  // Pass the date props - move gallery component as a child of search params to extract dates
  return (
    <div className={styles.globalContainer}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <h1 className={`${styles.header} font-jumbo`}>{headline}</h1>
      <ImageGallery />
    </div>
  );
};

export default Gallery;
