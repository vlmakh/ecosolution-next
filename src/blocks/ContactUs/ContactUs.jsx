import css from "./ContactUs.module.scss";
import { FaFacebook, FaInstagram, FaRegMap } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { contacts } from "@/data/contacts";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <section className={css.contacts} id="contactus">
      <h2 className={css.contacts__title}>contact us</h2>

      <div className={css.contacts__cont}>
        <ul className={css.contacts__list}>
          <li>
            <p>Phone:</p>

            <a className={css.info} href={`tel:${contacts.phone1}`}>
              <BsTelephone /> {contacts.phone1}
            </a>

            <a className={css.info} href={`tel:${contacts.phone2}`}>
              <BsTelephone /> {contacts.phone2}
            </a>
          </li>
          <li>
            <p>E-mail:</p>

            <a className={css.info} href={`mailto:${contacts.email}`}>
              <FaRegEnvelope /> {contacts.email}
            </a>
          </li>
          <li>
            <p>Address:</p>

            <a
              className={css.info}
              href="https://maps.app.goo.gl/rvMVfG57WyaTB5Sm7"
              target="_blank"
            >
              <FaRegMap /> {contacts.add}
            </a>
          </li>
          <li>
            <p>Social Networks:</p>
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
          </li>
        </ul>

        <ContactForm />
      </div>
    </section>
  );
};
