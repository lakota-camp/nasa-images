import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  // If error is encountered -> set state to the following
  // Static method is called directly on class itself: ErrorBoundary.getDerivedStateFromError()
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Lifecycle method
  componentDidCatch(error, info) {
    // Typically this would log to TrackJS or NewRelic
    console.log("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an Error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page.
        </h2>

        // // if you are passing component
        // this.props.Component
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
