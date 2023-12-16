import css from "./Services.module.scss";
import { services } from "@/data/services";

export const Services = () => {
  return (
    <section className={css.services} id="services">
      <h2 className={css.services__title}>
        The services <br /> we provide
      </h2>

      <div className={css.services__cont}>
        <p className={css.services__text}>
          Development and implementation of renewable enviroMentally friendly
          energy sources
        </p>

        <ul className={css.services__list}>
          {services.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
