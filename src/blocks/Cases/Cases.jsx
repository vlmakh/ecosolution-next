"use client";

import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import css from "./Cases.module.scss";
import { cases } from "@/data/cases";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

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
          {cases.map((image, idx) => (
            <div className={css.card__wrap} key={idx}>
              <div className={css.card}>
                <picture>
                  <source
                    srcSet={`/images/cases/mob_${image.srcName}.jpg`}
                    media="(max-width: 767px)"
                    sizes="320px"
                  />
                  <source
                    srcSet={`/images/cases/tab_${image.srcName}.jpg`}
                    media="(min-width: 768px) and (max-width: 1199px)"
                    sizes="342px"
                  />
                  <source
                    srcSet={`/images/cases/dsk_${image.srcName}.jpg`}
                    media="(min-width: 1280px)"
                    sizes="596px"
                  />
                  <img
                    src={image.srcMob}
                    alt={image.alt}
                    loading="lazy"
                    width="100%"
                  />
                </picture>

                <div className={css.name__wrap}>
                  <p className={css.card__name}>{image.name}</p>
                  <a
                    className={css.card__link}
                    href="#"
                    aria-label="More information"
                  >
                    <GoArrowUpRight size="28" />
                  </a>
                </div>

                <div className={css.card__footer}>
                  <p>{image.tech}</p>
                  <p>{image.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
