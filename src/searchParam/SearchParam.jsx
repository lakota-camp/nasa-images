import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import styles from "./SearchParam.module.scss";

// FIXME: Adjust to reset search params when search is made.
// FIXME: Fix search reset and extra renders that are not essential
// FIXME: Add functionality to search specific date (like birthday) and display the images of that day since you were born
const SearchParam = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/images?startDate=${startDate}&endDate=${endDate}`, {
      replace: true,
    });
    setStartDate("");
    setEndDate("");
  };

  // FIXME: Add Logic to not allow user to select date passed today!
  // FIXME: Add form submission for exact date search
  return (
    <div className={`${styles.container} font-md`}>
      <form onSubmit={handleSubmit}>
        <label className={styles.startDate} htmlFor="startDate">
          Start Date
          <input
            className={styles.searchField}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            id="startDate"
            name="startDate"
            placeholder="Start Date"
            required
          />
        </label>
        <label className={styles.endDate} htmlFor="endDate">
          End Date
          <input
            className={styles.searchField}
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            id="endDate"
            name="endDate"
            placeholder="End Date"
          />
        </label>
        <Button text="Search Images" />
      </form>
    </div>
  );
};

export default SearchParam;
