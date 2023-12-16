import css from "./About.module.scss";

export const About = () => {
  return (
    <section className={css.about} id="about">
      <div className={css.about__cont}>
        <h2 className={css.about__title}>
          LET&apos;s start with small start with ourselves
        </h2>

        <p className={css.about__text}>
          <span className={css.accent}>ECOSOLUTION</span> is the largest group
          of companies in Western Ukraine, which is engaged in the development
          and implementation of renewable environmentally friendly energy
          sources. We are the first privately owned company that received a loan
          from the European Bank for Reconstruction and Development (EBRD) and
          built the first wind farm in Western Ukraine. During the
          company&apos;s work, a number of projects in the field of energy were
          implemented. At the same time, new investment projects, in particular
          small hydropower and biofuels, are constantly being developed and
          developed with existing objects.
        </p>
      </div>
    </section>
  );
};
