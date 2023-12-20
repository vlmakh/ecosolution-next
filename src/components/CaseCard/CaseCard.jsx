import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import css from "./CaseCard.module.scss";
import PropTypes from "prop-types";

export const CaseCard = ({ item }) => {
  return (
    <div className={css.card__wrap}>
      <div className={css.card}>
        <Image
          src={`/images/cases/${item.srcName}.webp`}
          alt={item.alt}
          width={1192}
          height={592}
          sizes="(min-width: 1280px) 596px, (min-width: 768px) 342px, 320px"
        ></Image>

        <div className={css.name__wrap}>
          <p className={css.card__name}>{item.name}</p>
          <a className={css.card__link} href="#" aria-label="More information">
            <GoArrowUpRight size="28" />
          </a>
        </div>

        <div className={css.card__footer}>
          <p>{item.tech}</p>
          <p>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

CaseCard.propTypes = {
  item: PropTypes.shape({
    srcName: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    tech: PropTypes.string,
    date: PropTypes.string,
  }),
};
