"use client";

import css from "./TheHeader.module.scss";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo/Logo";
import { Nav } from "@/components/Nav/Nav";
import Modal from "@/components/Modal/Modal";
import { BurgerMenu } from "@/components/BurgerMenu/BurgerMenu";

export const TheHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [offset, setOffset] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={css.header}
      style={{
        backgroundColor:
          offset == 0 ? "rgb(243, 245, 250)" : "rgba(200, 200, 200, 0.5)",
        transition: "all 300ms ease-in",
      }}
    >
      <div className={css.header__cont}>
        <Logo />

        <Nav toggleMenu={toggleMenu} />
      </div>

      {showMenu && (
        <Modal onClose={toggleMenu}>
          <BurgerMenu toggleMenu={toggleMenu} />
        </Modal>
      )}
    </header>
  );
};
