import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 characters").required("Required"),
    number: Yup.string().min(3, "Minimum 3 characters").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number">Phone number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
