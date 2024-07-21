import styles from "./Loading.module.scss";
const LoadingMessage = () => {
  return (
    <div className={styles.loadingContainer}>
      <div>
        <h2>Loading...</h2>
        <div className={`${styles.LoadingMessage} ${styles.spin} font-xxl`}>
          🌀
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
