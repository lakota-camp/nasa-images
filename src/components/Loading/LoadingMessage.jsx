import styles from "./Loading.module.scss";
const LoadingMessage = () => {
  // FIXME: Style loading component
  return (
    <div className={styles.loadingContainer}>
      <div>
        <h2 className={styles.loadingIndicator}>Loading...</h2>
        <div className={`${styles.LoadingMessage} ${styles.spin} font-xxl`}>
          🌀
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
