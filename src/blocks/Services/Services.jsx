import { Section, TitleCenter } from "../Base/Base";
import { ServicesCont, WeProvide, List } from "./Services.styled";

export const Services = () => {
  return (
    <Section id="services">
      <TitleCenter>
        The services <br /> we provide
      </TitleCenter>

      <ServicesCont>
        <WeProvide>
          Development and implementation of renewable enviroMentally friendly
          energy sources
        </WeProvide>

        <List>
          <li>Solar</li>
          <li>Wind</li>
          <li>Hydro</li>
          <li>Thermal</li>
          <li>Nuclear</li>
        </List>
      </ServicesCont>
    </Section>
  );
};
