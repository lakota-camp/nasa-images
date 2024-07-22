import ImageGallery from "../components/ImageGallery/ImageGallery";
import styles from "./Page.module.scss";

const Gallery = () => {
  return (
    <>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <h1 className={`${styles.header} font-jumbo`}>Image Gallery</h1>
      <ImageGallery />
    </>
  );
};

export default Gallery;
