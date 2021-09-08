import React from "react";
import classes from "./Modal.Module.css";
import ReactDOM from "react-dom";
import { closeLoginModal } from "../../actions";
import { useDispatch } from "react-redux";

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeLoginModal());
  };
  return <div className={classes.backdrop} onClick={closeModal}></div>;
};
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const PortalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, PortalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
