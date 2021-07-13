import React, { createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import "./ModalDialog.css";

const modalContext = createContext();

export default function Modal({
  children,
  onModalClose,
  closeOnEsc = true,
  className = "modal-content-default",
}) {

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }

    document.addEventListener("keydown", keyListener);
    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  });

  const keyListenersMap = closeOnEsc
    ? new Map([[27, onModalClose]])
    : new Map([]);

  return createPortal(
    <div className="modal-container-default" role="dialog" aria-modal="true">
      <div className={className}>
        <modalContext.Provider value={{ onModalClose }}>
          {children}
        </modalContext.Provider>
      </div>
    </div>,
    document.body
  );
}

Modal.Header = function ModalHeader(props) {
  const { className = "modal-header-default" } = props;
  const { onModalClose } = useContext(modalContext);
  const classNameCloseBtn =
    className === "modal-header-default" ? "cross-btn" : "button__close-modal";
  return (
    <div className={className} tabIndex="-1">
      {props.children}
      <button
        className={classNameCloseBtn}
        title="Закрыть"
        onClick={() => onModalClose()}
        tabIndex="-1"
      >
        X
      </button>
    </div>
  );
};

Modal.Body = function ModalBody(props) {
  const { className = "modal-body-default__center", children } = props;
  return <div className={className}>{children}</div>;
};

Modal.Footer = function ModalFooter(props) {
  const { className = "modal-footer-default", children } = props;
  return <div className={className}>{children}</div>;
};

Modal.Footer.CloseBtn = function CloseBtn(props) {
  const { onModalClose } = useContext(modalContext);
  return (
    <button
      {...props}
      className="close-btn"
      title="Закрыть окно"
      onClick={onModalClose}
    />
  );
};
