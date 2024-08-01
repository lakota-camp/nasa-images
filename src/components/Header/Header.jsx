import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchParam from "../searchParam/SearchParam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Add CSS animations for hovering over search params, home logo, and button
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link className={`${styles.link} font-xxl `} to="/">
                Nasa Gallery
                <FontAwesomeIcon
                  className={`${styles.icon} font-xxl`}
                  icon={faUserAstronaut}
                />
              </Link>
            </li>
            <li>
              <SearchParam />
            </li>
          </ul>
        </nav>
        <div className={styles.gradient}></div>
      </header>
    </>
  );
};

export default Header;
