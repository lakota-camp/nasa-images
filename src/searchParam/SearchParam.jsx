import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

// FIXME: Adjust to reset search params when search is made.
// FIXME: Fix search reset and extra renders that are not essential
const SearchParam = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    const finalEndDate = endDate || today;

    if (!startDate) {
      alert("Start date is required!");
      return;
    }

    navigate(`/images?startDate=${startDate}&endDate=${finalEndDate}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">
          Start Date
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            id="startDate"
            name="startDate"
            placeholder="Start Date"
            required
          />
        </label>
        <label htmlFor="endDate">
          End Date
          <input
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
