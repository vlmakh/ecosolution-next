"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./ContactForm.module.scss";

const modalRoot = document.querySelector("#modal-root");

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

  return createPortal(
    <div className={css.overlay} onClick={handleBackdrop}>
      <div className={css.modelWrap}>{children}</div>
    </div>,
    modalRoot
  );
}
