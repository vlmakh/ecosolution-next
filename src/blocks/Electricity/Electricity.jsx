"use client";

import css from "./Electricity.module.scss";
import { useState, useEffect } from "react";

const value = localStorage.getItem("ecosolution");
const savedData = JSON.parse(value);

export const Electricity = () => {
  const [state, setState] = useState(savedData ?? 1134147814);

  const unit = 1;
  const thousand = unit * 1000;
  const million = thousand * 1000;
  const billion = million * 1000;

  const billions = Math.floor(state / billion);
  const millions = Math.floor((state % billion) / million)
    .toString()
    .padStart(3, "0");
  const thousands = Math.floor(((state % billion) % million) / thousand)
    .toString()
    .padStart(3, "0");
  const units = Math.floor((((state % billion) % million) % thousand) / unit)
    .toString()
    .padStart(3, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setState(state + 1);
    }, 1000);

    localStorage.setItem("ecosolution", JSON.stringify(state));

    return () => clearInterval(timer);
  }, [state]);

  return (
    <section className={css.electricity}>
      <h2 className={css.electricity__title}>
        Electricity we produced <br /> for all time
      </h2>

      <div className={css.qty}>
        <div className={css.qty__wrap}>
          <span className={css.qty__number}>
            {billions}.{millions}.{thousands}.{units}
          </span>{" "}
          <span className={css.qty__kwh}>kWh</span>
        </div>
      </div>
    </section>
  );
};
