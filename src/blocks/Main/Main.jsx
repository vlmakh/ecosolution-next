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
          src="/images/main/main_desk.jpg"
          alt="ecosolution"
          width="1240"
          height="524"
        />
      </div>

      {/* <picture className={css.thumb}>
        <source srcSet="/images/main/main_mob.jpg" media="(max-width: 767px)" sizes="320px" />
        <source
          srcSet="/images/main/main_tab.jpg"
          media="(min-width: 768px) and (max-width: 1199px)"
          sizes="708px"
        />
        <source srcSet="/images/main/main_desk.jpg" media="(min-width: 1280px)" sizes="1240px" />
        <Image src="/images/main/main_mob.jpg" alt="ecosolution" />
      </picture> */}
    </section>
  );
};
