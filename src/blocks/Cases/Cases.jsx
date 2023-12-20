"use client";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import css from "./Cases.module.scss";
import { cases } from "@/data/cases";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { CaseCard } from "@/components/CaseCard/CaseCard";

export const Cases = () => {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  const [slideNumber, setSlideNumber] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobileScreen ? 1 : 2,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    afterChange: function (index) {
      setSlideNumber(index + 1);
    },
  };

  const slider = useRef(null);

  return (
    <section className={css.cases} id="cases">
      <div className={css.cases__top}>
        <h2 className={css.cases__title}>
          Successful cases <br /> of our company
        </h2>

        <div className={css.slider__ctrls}>
          <p>
            {slideNumber.toString().padStart(2, "0")}{" "}
            <span className={css.grey}>
              /{cases.length.toString().padStart(2, "0")}
            </span>
          </p>
          <div>
            <button
              className={css.arrow}
              type="button"
              onClick={() => slider?.current?.slickPrev()}
              aria-label="Previous Case"
            >
              <GoArrowLeft size="36" />
            </button>{" "}
            <button
              className={css.arrow}
              type="button"
              onClick={() => slider?.current?.slickNext()}
              aria-label="Next Case"
            >
              <GoArrowRight size="36" />
            </button>
          </div>
        </div>
      </div>

      <div className={css.slider__wrap}>
        <Slider ref={slider} {...settings}>
          {cases.map((item, idx) => (
            <CaseCard item={item} key={idx} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
