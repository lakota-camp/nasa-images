import NasaImageOfTheDay from "../components/ImageOfDay/NasaImageOfTheDay";
import styles from "./Page.module.scss";
const Home = () => {
  return (
    <>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.container}>
        <h1 className={`${styles.header} font-jumbo`}>NASA Image of the Day</h1>
        <NasaImageOfTheDay />
      </div>
    </>
  );
};

export default Home;
