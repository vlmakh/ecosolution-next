import { FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";
import { contacts } from "@/data/contacts";
import css from "./TheFooter.module.scss";
import LogoImg from "../../../public/images/eco_logo.svg";

export const TheFooter = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__cont}>
        <div className={css.footer__logo}>
          <LogoImg />

          <a className={css.arrowUp} href="#" aria-label="To the top of site">
            <FaArrowUp size="16" />
          </a>

          <div className={css.socials}>
            <a
              className={css.socials__link}
              href="http://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaFacebook size="24" />
            </a>
            <a
              className={css.socials__link}
              href="http://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaInstagram size="24" />
            </a>
          </div>
        </div>

        <ul className={css.contacts}>
          <li className={css.contacts__item}>{contacts.add}</li>
          <li className={css.contacts__item}>{contacts.email}</li>
          <li className={css.contacts__item}>{contacts.copyright}</li>
        </ul>
      </div>
    </footer>
  );
};
