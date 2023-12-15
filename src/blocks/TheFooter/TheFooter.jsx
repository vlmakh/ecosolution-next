import { FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";
import { contacts } from "@/data/contacts";
import Image from "next/image";
import css from "./TheFooter.module.scss";

export const TheFooter = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__cont}>
        <div className={css.footer__logo}>
          <Image
            src="/images/eco_logo.png"
            alt="ecosolution"
            width="269"
            height="40"
          />

          <a className={css.arrowUp} href="#">
            <FaArrowUp size="16" />
          </a>

          <div className={css.socials}>
            <a className={css.socials__link} href="http://facebook.com">
              <FaFacebook size="24" />
            </a>
            <a className={css.socials__link} href="http://instagram.com">
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
