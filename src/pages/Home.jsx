import NasaImageOfTheDay from "../components/ImageOfDay/NasaImageOfTheDay";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <>
      <h1 className={`${styles.header} font-xxl`}>NASA Image of the day</h1>
      <NasaImageOfTheDay />;
    </>
  );
};

export default Home;
