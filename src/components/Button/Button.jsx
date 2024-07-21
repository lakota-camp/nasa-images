import styles from "./Button.module.scss";

const Button = (props) => {
  const { text, action } = props;
  return (
    <button onClick={action} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
