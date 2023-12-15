import { Section, TitleCenter } from "../Base/Base";
import {
  ContactsContainer,
  List,
  Item,
  ItemInfo,
  Socials,
  SocialLink,
} from "./ContactUs.styled";
import { FaFacebook, FaInstagram, FaRegMap } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { contacts } from "@/assets/contacts";
import { ContactForm } from "../ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <Section id="contactus">
      <TitleCenter>contact us</TitleCenter>

      <ContactsContainer>
        <List>
          <Item>
            <p>Phone:</p>

            <ItemInfo href={`tel:${contacts.phone1}`}>
              <BsTelephone /> {contacts.phone1}
            </ItemInfo>

            <ItemInfo href={`tel:${contacts.phone2}`}>
              <BsTelephone /> {contacts.phone2}
            </ItemInfo>
          </Item>
          <Item>
            <p>E-mail:</p>

            <ItemInfo href={`mailto:${contacts.email}`}>
              <FaRegEnvelope /> {contacts.email}
            </ItemInfo>
          </Item>
          <Item>
            <p>Address:</p>

            <ItemInfo href="https://maps.app.goo.gl/rvMVfG57WyaTB5Sm7" target="_blank">
              <FaRegMap /> {contacts.add}
            </ItemInfo>
          </Item>
          <Item>
            <p>Social Networks:</p>
            <Socials>
              <SocialLink href="http://facebook.com">
                <FaFacebook size="24" />
              </SocialLink>
              <SocialLink href="http://instagram.com">
                <FaInstagram size="24" />
              </SocialLink>
            </Socials>
          </Item>
        </List>

        <ContactForm />
      </ContactsContainer>
    </Section>
  );
};
