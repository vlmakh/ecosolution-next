import Image from "next/image";
import css from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a className={css.logoLink} href="#" aria-label="Logo">
      <Image
        src="/images/eco_logo.png"
        alt="ecosolution"
        width="269"
        height="40"
      />
    </a>
  );
};
