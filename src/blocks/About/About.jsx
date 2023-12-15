import { Section } from "../Base/Base";
import {
  AboutTop,
  AboutText,
  TitleAbout,
  Accent,
} from "./About.styled";

export const About = () => {
  return (
    <Section id="about">
      <AboutTop>
        <TitleAbout>
          LET&apos;s start with small start with ourselves
        </TitleAbout>

        <AboutText>
          <Accent>ECOSOLUTION</Accent> is the largest group of companies in
          Western Ukraine, which is engaged in the development and
          implementation of renewable environmentally friendly energy sources.
          We are the first privately owned company that received a loan from the
          European Bank for Reconstruction and Development (EBRD) and built the
          first wind farm in Western Ukraine. During the company&apos;s work, a
          number of projects in the field of energy were implemented. At the
          same time, new investment projects, in particular small hydropower and
          biofuels, are constantly being developed and developed with existing
          objects.
        </AboutText>
      </AboutTop>
    </Section>
  );
};
