import styles from "./ErrorMessage.module.scss";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  // FIXME: Style error component
  return (
    <div className={styles.container}>
      <div>
        <h2 className={`${styles.message} font-xxl`}>Error!</h2>
        <h2>
          <Link className={styles.link} to="/">
            Return to home
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default ErrorMessage;
