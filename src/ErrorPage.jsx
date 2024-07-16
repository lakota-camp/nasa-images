import { Link } from "react-router-dom";
const ErrorPage = (props) => {
  const { message } = props;
  return (
    <h2>
      {message} <Link to="/">Click here</Link> to go back to the home page.
    </h2>
  );
};

export default ErrorPage;
