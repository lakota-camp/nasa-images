import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchParam from "../../searchParam/SearchParam";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link className={`${styles.link} font-xl`} to="/">
                Home [LOGO]
              </Link>
            </li>
            <li>
              <Link className={`${styles.link} font-lg`} to="/images">
                Nasa Images
              </Link>
            </li>
            <li>
              <SearchParam />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
