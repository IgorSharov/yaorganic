import React from "react";
import "./Home.scss";

import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import { Container, Button, Header } from "semantic-ui-react";

interface FormValues {
  country: string;
  description: string;
  name: string;
}

const Home: React.FC<{}> = () => {
  const initialValues: FormValues = { country: "", description: "", name: "" };

  return (
    <Container>
      <Header as="h3">Форма Вендора</Header>
      <Formik
        initialValues={initialValues}
        validate={(values: FormValues) => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.country) {
            errors.country = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="country" />
            <ErrorMessage name="country" component="div" className="class1" />
            <Field type="text" name="description" />
            <ErrorMessage name="description" component="div" />
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <Button type="submit" className="primary" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Home;
