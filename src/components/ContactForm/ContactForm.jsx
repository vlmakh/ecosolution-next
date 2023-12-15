import { Formik } from "formik";
import {
  StyledForm,
  StyledField,
  Label,
  StyledErrorMsg,
  Send, InputNumber
} from "./ContactForm.styled";
import { FaArrowRight } from "react-icons/fa6";
import { ButtonArrow } from "../Base/Base";
import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().min(3).required("Wrong Name"),
  email: yup.string().email().required("Wrong Email"),
  phone: yup.string().required("Wrong Phone"),
});

export const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <p>* Full Name:</p>
            <Label htmlFor="name">
              <StyledField
                name="name"
                type="name"
                placeholder="John Rosie"
              ></StyledField>
              <StyledErrorMsg component="div" name="name" />
            </Label>

            <p>* E-mail:</p>
            <Label htmlFor="email">
              <StyledField
                name="email"
                type="email"
                placeholder="johnrosie@gmail.com"
              ></StyledField>
              <StyledErrorMsg component="div" name="email" />
            </Label>

            <p>* Phone:</p>
            <Label htmlFor="phone">
              <StyledField name="phone"         
              >
                  {({ field }) => (
                  <InputNumber
                    {...field}
                    type="tel"
                    mask="+99 999 999 9999"
                    placeholder="+380961234567"
                  />
                )}

              </StyledField>
              <StyledErrorMsg component="div" name="phone" />
            </Label>

            <p>Message:</p>
            <Label htmlFor="message">
              <StyledField
                as="textarea"
                name="message"
                type="message"
                rows="5"
                placeholder="Your message"
              ></StyledField>
            </Label>

            <Send type="submit" disabled={isSubmitting}>
              Send
              <ButtonArrow>
                <FaArrowRight />
              </ButtonArrow>
            </Send>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
