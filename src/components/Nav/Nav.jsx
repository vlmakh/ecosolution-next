import { FiMenu } from "react-icons/fi";
import { IoMdArrowRoundDown } from "react-icons/io";
import css from "./Nav.module.scss";

export const Nav = ({ toggleMenu }) => {
  return (
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
  );
};
