"use client";

import { useState } from "react";
import css from "./Faq.module.scss";
import { faq } from "@/data/faq";
import { FaPlus, FaMinus } from "react-icons/fa";

export const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleClick = (num) => {
    if (open === num) {
      setOpen(100);
      return;
    }
    setOpen(num);
  };

  return (
    <section className={css.faq} id="faq">
      <div className={css.faq__cont}>
        <h3 className={css.faq__title}>
          Frequently Asked <br /> Questions
        </h3>

        <ul className={css.faq__list}>
          {faq.map((item, ind) => (
            <li className={css.faq__item} key={ind}>
              <div
                className={css.question__wrap}
                onClick={() => handleClick(ind)}
              >
                <p className={`${open === ind ? css.minus : css.plus}`}>
                  {open === ind ? <FaMinus size="16" /> : <FaPlus size="16" />}
                </p>
                <h4>{item.question}</h4>
              </div>
              <p
                className={css.answer}
                style={{ display: open === ind ? "block" : "none" }}
              >
                {item.answer}
              </p>
            </li>
          ))}
        </ul>

        <div className={css.didntfind}>
          <p>Didn&apos;t find the answer to your question? </p>

          <a className={css.link} href="#contactus">
            Contact Us
            <span className={css.round} />
          </a>
        </div>
      </div>
    </section>
  );
};
