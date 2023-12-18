import css from "./Values.module.scss";
import { TbWorldCheck } from "react-icons/tb";
import { BsUniversalAccessCircle } from "react-icons/bs";
import { FaRankingStar } from "react-icons/fa6";
import { HiChip } from "react-icons/hi";

export const Values = () => {
  return (
    <section className={css.values} id="values">
      <div className={css.values__top}>
        <h2 className={css.values__title}>
          Main values of <br /> our company
        </h2>

        <p className={css.values__text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&apos;s energy needs.
        </p>
      </div>

      <ul className={css.values__list}>
        <li className={css.values__item}>
          <div className={css.value__card}>
            <h3 className={css.value__name}>
              <BsUniversalAccessCircle size="16" /> OPENNESS
            </h3>
            <p>to the world, people, new ideas and projects</p>
          </div>
          <div className={css.value__card}>
            <h3 className={css.value__name}>
              <TbWorldCheck size="16" /> Responsibility
            </h3>
            <p>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </div>
        </li>
        <li className={css.values__item}>
          <picture>
            <source
              srcSet="/images/values/values_1_342.jpg"
              media="(min-width: 768px) and (max-width: 1199px)"
              sizes="342px"
            />
            <source
              srcSet="/images/values/values_1_596.jpg"
              media="(min-width: 1280px)"
              sizes="596px"
            />
            <img
              src="/images/values/values_1_342.jpg"
              alt="values"
              loading="lazy"
              width="100%"
              height={197}
            />
          </picture>
        </li>
        <li className={css.values__item}>
          <picture>
            <source
              srcSet="/images/values/values_2_342.jpg"
              media="(min-width: 768px) and (max-width: 1199px)"
              sizes="342px"
            />
            <source
              srcSet="/images/values/values_2_596.jpg"
              media="(min-width: 1280px)"
              sizes="596px"
            />
            <img
              src="/images/values/values_2_342.jpg"
              alt="values"
              loading="lazy"
              width="100%"
              height={197}
            />
          </picture>
        </li>
        <li className={css.values__item}>
          <div className={css.value__card}>
            <h3 className={css.value__name}>
              <HiChip size="16" /> Innovaton
            </h3>
            <p>
              we use the latest technology to implement non-standard solutions
            </p>
          </div>
          <div className={css.value__card}>
            <h3 className={css.value__name}>
              <FaRankingStar size="16" /> Quality
            </h3>
            <p>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
