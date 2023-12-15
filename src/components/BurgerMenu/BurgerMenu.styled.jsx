import styled from "@emotion/styled";

export const Menu = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 72px);
  padding: 24px;
  background-color: ${(p) => p.theme.colors.main};
  border-radius: 16px;
  opacity: 90%;
  max-height: 865px;
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    width: 365px;
  }
`;

export const Close = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 4px;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 16px;
  text-align: left;
  cursor: pointer;

  transition: color 250ms ease-in;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 16px;
  flex-grow: 1;
`;

export const Item = styled.li`
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 24px;

  transition: color 250ms ease-in;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 8px;
`;

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;
  color: #ffffff;

  transition: color 250ms ease-in;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
