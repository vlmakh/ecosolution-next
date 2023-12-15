import {
  Menu,
  Close,
  List,
  Item,
  MenuLink,
  Socials,
  SocialLink,
} from "./BurgerMenu.styled";
import { MdArrowOutward } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import PropTypes from "prop-types";

export const BurgerMenu = ({ toggleMenu }) => {
  return (
    <Menu>
      <Close type="button" onClick={toggleMenu}>
        <RxCross2 size="20"/> close
      </Close>

      <List>
        <Item>
          <MenuLink href="#" onClick={toggleMenu}>
            Main <MdArrowOutward />
          </MenuLink>
        </Item>

        <Item>
          <MenuLink href="#about" onClick={toggleMenu}>
            About <MdArrowOutward />
          </MenuLink>
        </Item>

        <Item>
          <MenuLink href="#values" onClick={toggleMenu}>
            Values <MdArrowOutward />
          </MenuLink>
        </Item>

        <Item>
          <MenuLink href="#services" onClick={toggleMenu}>
            Services <MdArrowOutward />
          </MenuLink>
        </Item>
       
        <Item>
          <MenuLink href="#cases" onClick={toggleMenu}>
            Cases <MdArrowOutward />
          </MenuLink>
        </Item>

        <Item>
          <MenuLink href="#faq" onClick={toggleMenu}>
            FAQ <MdArrowOutward />
          </MenuLink>
        </Item>
        
        <Item>
          <MenuLink href="#contactus" onClick={toggleMenu}>
            Contact Us <MdArrowOutward />
          </MenuLink>
        </Item>
      </List>

      <Socials>
        <SocialLink href="http://facebook.com">
          <FaFacebook size="24" />
        </SocialLink>
        <SocialLink href="http://instagram.com">
          <FaInstagram size="24" />
        </SocialLink>
      </Socials>
    </Menu>
  );
};

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
};
