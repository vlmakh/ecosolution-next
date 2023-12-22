import css from "./Logo.module.scss";
import LogoImg from "../../../public/images/eco_logo.svg";

export const Logo = () => {
  return (
    <a className={css.logoLink} href="#" aria-label="Logo">
      <LogoImg />
    </a>
  );
};
