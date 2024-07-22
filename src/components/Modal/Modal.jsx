import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

const Modal = ({ children }) => {
  const elRef = useRef(null); // useRef is used to create a reference to a DOM element

  if (!elRef.current) {
    elRef.current = document.createElement("div"); // If the reference is not set, create a new div element
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal"); // Get the element with id "modal" from the DOM
    modalRoot.appendChild(elRef.current); // Append the div element to the modalRoot

    return () => modalRoot.removeChild(elRef.current); // Clean up by removing the div element from the modalRoot when the component is unmounted
  }, []);

  return createPortal(
    <div className="modal-content">
      {/* <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div> */}
      <div className="modal-body">{children}</div>
    </div>,
    elRef.current
  ); // Render the children inside the div element using createPortal
};

export default Modal;

/*
This component is a reusable modal component that creates a portal to render its children outside of the main DOM hierarchy.
It uses useRef to create a reference to a div element, and useEffect to append and remove the div element from the modal root element.
The children are rendered inside the div element using createPortal.
*/
