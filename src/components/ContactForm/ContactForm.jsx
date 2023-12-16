"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import * as yup from "yup";
import InputMask from "react-input-mask";

let schema = yup.object().shape({
  name: yup.string().min(3).required("Wrong Name"),
  email: yup.string().email().required("Wrong Email"),
  phone: yup.string().required("Wrong Phone"),
});

export const ContactForm = () => {
  return (
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
        <Form className={css.form}>
          <p>* Full Name:</p>
          <label className={css.label} htmlFor="name">
            <Field
              id="name"
              className={css.input}
              name="name"
              type="name"
              placeholder="John Rosie"
              autoComplete="on"
            ></Field>
            <ErrorMessage className={css.error} component="div" name="name" />
          </label>

          <p>* E-mail:</p>
          <label className={css.label} htmlFor="email">
            <Field
              id="email"
              className={css.input}
              name="email"
              type="email"
              placeholder="johnrosie@gmail.com"
              autoComplete="on"
            ></Field>
            <ErrorMessage className={css.error} component="div" name="email" />
          </label>

          <p>* Phone:</p>
          <label className={css.label} htmlFor="phone">
            <Field className={css.input} name="phone">
              {({ field }) => (
                <InputMask
                  id="phone"
                  className={css.mask}
                  {...field}
                  type="tel"
                  mask="+99 999 999 9999"
                  placeholder="+380961234567"
                  autoComplete="on"
                />
              )}
            </Field>
            <ErrorMessage className={css.error} component="div" name="phone" />
          </label>

          <p>Message:</p>
          <label className={css.label} htmlFor="message">
            <Field
              id="message"
              className={css.input}
              as="textarea"
              name="message"
              type="message"
              rows="5"
              placeholder="Your message"
            ></Field>
          </label>

          <button className={css.send} type="submit" disabled={isSubmitting}>
            Send
            <span className={css.arrow}>
              <FaArrowRight />
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
};
