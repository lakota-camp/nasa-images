import NasaImageOfTheDay from "../components/ImageOfDay/NasaImageOfTheDay";
import styles from "./Page.module.scss";
const Home = () => {
  return (
    <>
      <h1 className={`${styles.header} font-jumbo`}>NASA Image of the day</h1>
      <NasaImageOfTheDay />;
    </>
  );
};

export default Home;
