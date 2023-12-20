import { Counter } from "@/components/Counter/Counter";

import css from "./Electricity.module.scss";

export const Electricity = () => {
  return (
    <section className={css.electricity}>
      <h2 className={css.electricity__title}>
        Electricity we produced <br /> for all time
      </h2>

      <Counter />
    </section>
  );
};
