"use client";

import css from "./TheHeader.module.scss";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowRoundDown } from "react-icons/io";
// import ecoLogo from "public/images/eco_logo.png";
import { useState, useEffect } from "react";

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
        <a className={css.logoLink} href="#" />
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
    </header>
  );
};
