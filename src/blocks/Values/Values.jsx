import { Section } from "../Base/Base";
import {
  TitleValues,
  ValuesTop,
  ValuesText,
  List,
  Item,
  Name,
  ValueCard,
} from "./Values.styled";
import { TbWorldCheck } from "react-icons/tb";
import { BsUniversalAccessCircle } from "react-icons/bs";
import { FaRankingStar } from "react-icons/fa6";
import { HiChip } from "react-icons/hi";
import tabValue1 from "@/assets/values/values_1_342.jpg";
import tabValue2 from "@/assets/values/values_2_342.jpg";
import dskValue1 from "@/assets/values/values_1_596.jpg";
import dskValue2 from "@/assets/values/values_2_596.jpg";

export const Values = () => {
  return (
    <Section id="values">
      <ValuesTop>
        <TitleValues>
          Main values of <br /> our company
        </TitleValues>

        <ValuesText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&apos;s energy needs.
        </ValuesText>
      </ValuesTop>

      <List>
        <Item>
          <ValueCard>
            <Name>
              <BsUniversalAccessCircle size="16" /> OPENNESS
            </Name>
            <p>to the world, people, new ideas and projects</p>
          </ValueCard>
          <ValueCard>
            <Name>
              <TbWorldCheck size="16" /> Responsibility
            </Name>
            <p>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </ValueCard>
        </Item>
        <Item>
          <picture>
            <source
              srcSet={tabValue1}
              media="(min-width: 768px) and (max-width: 1199px)"
              sizes="342px"
            />
            <source
              srcSet={dskValue1}
              media="(min-width: 1280px)"
              sizes="596px"
            />
            <img src={tabValue1} alt="values" loading="lazy" width="100%" />
          </picture>
        </Item>
        <Item>
          <picture>
            <source
              srcSet={tabValue2}
              media="(min-width: 768px) and (max-width: 1199px)"
              sizes="342px"
            />
            <source
              srcSet={dskValue2}
              media="(min-width: 1280px)"
              sizes="596px"
            />
            <img src={tabValue2} alt="values" loading="lazy" width="100%" />
          </picture>
        </Item>
        <Item>
          <ValueCard>
            <Name>
              <HiChip size="16" /> Innovaton
            </Name>
            <p>
              we use the latest technology to implement non-standard solutions
            </p>
          </ValueCard>
          <ValueCard>
            <Name>
              <FaRankingStar size="16" /> Quality
            </Name>
            <p>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </ValueCard>
        </Item>
      </List>
    </Section>
  );
};
