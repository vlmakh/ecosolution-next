import ecoLogo from "@/assets/eco_logo.png";
import {
  Footer,
  FooterContainer,
  LogoBox,
  ArrowLink,
  Socials,
  SocialLink,
  List,
  Item,
} from "./TheFooter.styled";
import { FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";
import { contacts } from "@/assets/contacts";

export const TheFooter = () => {
  return (
    <Footer>
      <FooterContainer>
        <LogoBox>
          <img src={ecoLogo} alt="ecosolution" width="269" />
          
          <ArrowLink href="#">
            <FaArrowUp size="16" />
          </ArrowLink>

          <Socials>
          <SocialLink href="http://facebook.com">
            <FaFacebook size="24" />
          </SocialLink>
          <SocialLink href="http://instagram.com">
            <FaInstagram size="24" />
          </SocialLink>
        </Socials>
        </LogoBox>

        

        <List>
          <Item>{contacts.add}</Item>
          <Item>{contacts.email}</Item>
          <Item>{contacts.copyright}</Item>
        </List>
      </FooterContainer>
    </Footer>
  );
};
