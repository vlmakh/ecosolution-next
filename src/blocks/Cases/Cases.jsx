import { Section } from "../Base/Base";
import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import {
  TitleCases,
  CasesTop,
  ButtonArrow,
  SliderWrap,
  CardWrap,
  CaseCard,
  CtrlBox,
  Grey,
  NameBox,
  Name,
  ButtonCase,
  CardFooter,
} from "./Cases.styled";
import { cases } from "../../assets/cases";
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
    <Section id="cases">
      <CasesTop>
        <TitleCases>
          Successful cases <br /> of our company
        </TitleCases>

        <CtrlBox>
          <p>
            {slideNumber.toString().padStart(2, "0")}{" "}
            <Grey>/{cases.length.toString().padStart(2, "0")}</Grey>
          </p>
          <div>
            <ButtonArrow
              type="button"
              onClick={() => slider?.current?.slickPrev()}
            >
              <GoArrowLeft size="36" />
            </ButtonArrow>{" "}
            <ButtonArrow
              type="button"
              onClick={() => slider?.current?.slickNext()}
            >
              <GoArrowRight size="36" />
            </ButtonArrow>
          </div>
        </CtrlBox>
      </CasesTop>

      <SliderWrap>
        <Slider ref={slider} {...settings}>
          {cases.map((image, idx) => (
            <CardWrap key={idx}>
              <CaseCard>
                <picture>
                  <source
                    srcSet={image.srcMob}
                    media="(max-width: 767px)"
                    sizes="320px"
                  />
                  <source
                    srcSet={image.srcTab}
                    media="(min-width: 768px) and (max-width: 1199px)"
                    sizes="342px"
                  />
                  <source
                    srcSet={image.srcDsk}
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

                <NameBox>
                  <Name>{image.name}</Name>
                  <ButtonCase href="#">
                    <GoArrowUpRight size="28" />
                  </ButtonCase>
                </NameBox>

                <CardFooter>
                  <p>{image.tech}</p>
                  <p>{image.date}</p>
                </CardFooter>
              </CaseCard>
            </CardWrap>
          ))}
        </Slider>
      </SliderWrap>
    </Section>
  );
};
