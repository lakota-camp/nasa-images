import styles from "./Loading.module.scss";
const LoadingMessage = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* <h2 className={`${styles.loadingIndicator} font-xl`}>Loading...</h2> */}
        <div className={`${styles.message} ${styles.spin} font-xxl`}>
          <div className={styles.loading}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
