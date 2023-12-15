import styled from "@emotion/styled";

export const ContactsContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const List = styled.ul`
  text-align: left;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;

export const ItemInfo = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.main};
  margin-top: 8px;
  font-size: 20px;

  & svg {
    transition: fill 250ms ease-in;
  }

  :hover svg {
    fill: ${(p) => p.theme.colors.accent};
  }

  @media (min-width: 768px) {
    margin-top: 16px;
  }
`

export const Socials = styled.div`
  display: inline-flex;
  gap: 8px;
  margin-top: 8px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${(p) => p.theme.colors.main};

  transition: color 250ms ease-in;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
