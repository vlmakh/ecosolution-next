import { FaArrowRight } from "react-icons/fa6";
import { contacts } from "@/data/contacts";
import Image from "next/image";
import css from "./Main.module.scss";

export const Main = () => {
  return (
    <section className={css.main}>
      <div className={css.main__top}>
        <h1 className={css.main__title}>RENEWABLE ENERGY For any task</h1>

        <div>
          <p>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>

          <div className={css.button__wrap}>
            <a className={css.more} href="#cases">
              Learn more
              <span className={css.arrow}>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <ul className={css.main__contacts}>
        <li>{contacts.add}</li>
        <li>{contacts.email}</li>
        <li>{contacts.copyright}</li>
      </ul>

      <div className={css.thumb}>
        <Image
          src="/images/main/main_dsk@2x.webp"
          alt="Windmill"
          width={1240}
          height={524}
          sizes="(min-width: 1280px) 1240px, (min-width: 768px) 708px, 320px"
          priority={true}
        />
      </div>
    </section>
  );
};
