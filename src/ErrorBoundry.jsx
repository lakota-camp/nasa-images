/**
 * ErrorBoundary component is a class component that acts as an error boundary for its child components.
 * It catches any errors that occur during rendering, and displays an error message instead of crashing the application.
 * This component is used to handle errors gracefully and provide a fallback UI to the user.
 *
 * @component
 * @example
 *
 * Usage:
 * <ErrorBoundary>
 *   <ComponentWithError />
 * </ErrorBoundary>
 */
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  /**
   * A static method that is called when an error is thrown during rendering.
   * It updates the state to indicate that an error has occurred.
   * Static method is a method called directly on class: ErrorBoundary.getDerivedStateFromError()
   * @static
   * @returns {Object} - The updated state object with hasError set to true.
   */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /**
   * A lifecycle method that is called when an error is caught by the error boundary.
   * It logs the error and additional information for debugging purposes.
   *
   * @param {Error} error - The error object that was thrown.
   * @param {Object} info - Additional information about the error.
   */
  componentDidCatch(error, info) {
    console.log("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an Error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
