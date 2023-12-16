"use client";

import css from "./TheHeader.module.scss";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowRoundDown } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";
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
    <header className={css.header}>
      <div className={css.header__cont}>
        <a className={css.logoLink} href="#">
          <Image
            src="/images/eco_logo.png"
            alt="ecosolution"
            width="269"
            height="40"
          />
        </a>
        <nav className={css.nav}>
          <button
            className={css.menu}
            type="button"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <FiMenu size={16} />
          </button>

          <a className={css.getInTouch} href="#contactus">
            Get in touch
            <span className={css.round}>
              <IoMdArrowRoundDown size={12} />
            </span>
          </a>
        </nav>
      </div>

      {showMenu && (
        <Modal onClose={toggleMenu}>
          <BurgerMenu toggleMenu={toggleMenu} />
        </Modal>
      )}
    </header>
  );
};
