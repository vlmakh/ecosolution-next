import styled from "@emotion/styled";

export const Footer = styled.footer`
  text-align: center;
  border-top: 1px solid ${(p) => p.theme.colors.accent};
`;

export const FooterContainer = styled.div`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 20px 50px;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ArrowLink = styled.a`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 50%;
  border: none;
  color: #292d32;
  margin-left: auto;

  transition: all 250ms ease-in;

  &:hover {    
    background-color: ${(p) => p.theme.colors.main};
    color: ${(p) => p.theme.colors.accent};
  }

  @media (min-width: 768px) {
    order: 1;
  }
`;

export const Socials = styled.div`
  display: inline-flex;
  gap: 8px;
  margin: 24px auto 0;
  width: 176px;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 0;    
    align-items: center;
  }
`;

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;
  color: ${(p) => p.theme.colors.main};

  transition: color 250ms ease-in;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
`;

export const Item = styled.li`
  &:not(:first-of-type) {
    @media (max-width: 767.98px)
    {margin-top: 16px;}
  }
`;
