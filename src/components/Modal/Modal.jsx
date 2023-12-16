"use client";

import { useEffect } from "react";
import css from "./Modal.module.scss";
import PropTypes from "prop-types";

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });

  const handleEscape = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  const handleBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdrop}>
      <div className={css.modalWrap}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.any,
};
