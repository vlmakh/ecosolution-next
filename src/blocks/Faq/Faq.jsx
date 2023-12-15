import { useState } from "react";
import { BtnLnkGreen, Round  } from "../Base/Base";
import { SectionFaq, TitleFaq,
  List,
  Item,
  Question,
  PlusMinus,
  Answer,
  Didnt,
} from "./Faq.styled";
import { faq } from "@/assets/faq";

export const Faq = () => {
  const [state, setState] = useState(0);

  const handleClick = (num) => {
    if (state === num) {
      setState(100);
      return;
    }
    setState(num);
  };

  return (
    <SectionFaq id="faq">
      <TitleFaq>Frequently Asked <br/> Questions</TitleFaq>

      <List>
        {faq.map((item, ind) => (
          <Item key={ind}>
            <Question  onClick={() => handleClick(ind)}>
              <PlusMinus minus={state === ind}>
                {state === ind ? "-" : "+"}
              </PlusMinus>
              <h4>{item.question}</h4>
            </Question>
            <Answer opened={state === ind ? true : false}>{item.answer}</Answer>
          </Item>
        ))}
      </List>

      <Didnt>
        <p>Didn&apos;t find the answer to your question? </p>

        <BtnLnkGreen href="#contactus">
          Contact Us
          <Round />
        </BtnLnkGreen>
      </Didnt>
    </SectionFaq>
  );
};
