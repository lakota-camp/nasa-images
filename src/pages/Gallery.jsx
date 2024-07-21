import ImageGallery from "../components/ImageGallery/ImageGallery";
import styles from "./Page.module.scss";

const Gallery = () => {
  return (
    <>
      <h1 className={`${styles.header} font-jumbo`}>Image Gallery</h1>
      <ImageGallery />
    </>
  );
};

export default Gallery;
