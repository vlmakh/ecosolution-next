import css from "./BurgerMenu.module.scss";
import { MdArrowOutward } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import PropTypes from "prop-types";
import { menu } from "@/data/menu";

export const BurgerMenu = ({ toggleMenu }) => {
  return (
    <div className={css.menu}>
      <button className={css.close} type="button" onClick={toggleMenu}>
        <RxCross2 size="20" /> close
      </button>

      <ul className={css.menu__list}>
        {menu.map((item) => (
          <li className={css.menu__item} key={item.id}>
            <a className={css.menu__link} href={item.id} onClick={toggleMenu}>
              {item.name} <MdArrowOutward />
            </a>
          </li>
        ))}
      </ul>

      <div className={css.socials}>
        <a
          className={css.socials__link}
          href="http://facebook.com"
          aria-label="Facebook"
        >
          <FaFacebook size="24" />
        </a>
        <a
          className={css.socials__link}
          href="http://instagram.com"
          aria-label="Instagram"
        >
          <FaInstagram size="24" />
        </a>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
};
