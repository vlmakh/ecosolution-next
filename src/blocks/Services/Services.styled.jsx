import styled from "@emotion/styled";
import energyMob from "@/assets/services/energy_mob.png";

export const ServicesCont = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const WeProvide = styled.p`
  padding: 52px 18px;
  font-size: 36px;
  font-family: ${(p) => p.theme.fonts.title};
  text-transform: uppercase;
  text-align: left;
  line-height: 36px;
  background-color: ${(p) => p.theme.colors.grey};

  @media (min-width: 768px) {
    width: 50%;
    font-size: 40px;
  }
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  font-size: 20px;
  line-height: 36px;

  background-image: url(${energyMob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media (max-width: 767.98px) {
    margin-top: 24px;
  }

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
  }
`;
