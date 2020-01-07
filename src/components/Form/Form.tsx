import React from "react";
import "./Form.scss";

import axios from "axios";
import { Formik, FormikErrors } from "formik";
import { Form as FormSUI, Header } from "semantic-ui-react";

interface FormValues {
  country: string;
  description: string;
  name: string;
}

const Form: React.FC<{}> = () => (
  <React.Fragment>
    <Header as="h3">POST | /catalog-admin/vendors | addVendor</Header>
    <Formik
      initialValues={{ country: "", description: "", name: "" }}
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
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/catalog-admin/vendors`,
            values
          )
          .then(function(response) {
            console.log(response);
            resetForm();
          })
          .catch(function(error) {
            console.log(error);
          });
        setSubmitting(false);
      }}
    >
      {props => {
        const {
          dirty,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
          errors,
          touched,
          values
        } = props;
        const hasError: boolean = Object.keys(errors).length !== 0;

        return (
          // TODO: Implement fields input from JSON
          <FormSUI onSubmit={handleSubmit} error={hasError}>
            <FormSUI.Group widths="equal">
              <FormSUI.Input
                fluid
                name="name"
                value={values["name"]}
                label="Name"
                placeholder="Roga&Kopyta"
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  touched["name"] &&
                  errors["name"] && { content: errors["name"] }
                }
              />
              <FormSUI.Input
                fluid
                name="country"
                value={values["country"]}
                label="Country"
                placeholder="Russia"
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  touched["country"] &&
                  errors["country"] && { content: errors["country"] }
                }
              />
              <FormSUI.Input
                fluid
                name="description"
                value={values["description"]}
                label="Description"
                placeholder="other"
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  touched["description"] &&
                  errors["description"] && { content: errors["description"] }
                }
              />
            </FormSUI.Group>
            <FormSUI.Button
              type="submit"
              className="primary"
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
            >
              Submit
            </FormSUI.Button>
            <pre>{JSON.stringify(props, null, 2)}</pre>
          </FormSUI>
        );
      }}
    </Formik>
  </React.Fragment>
);

export default Form;
