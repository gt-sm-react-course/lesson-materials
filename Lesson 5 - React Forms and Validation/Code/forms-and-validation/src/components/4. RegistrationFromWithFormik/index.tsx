import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useUsernameCheck from "./useUsernameCheck";

interface FormData {
  name: string;
  username: string;
  email: string;
}

const RegistrationFormComponent: React.FC = () => {
  const { checkUsernameExists } = useUsernameCheck();

  const initialValues: FormData = {
    name: "",
    username: "",
    email: "",
  };

  const validate = async (values: FormData) => {
    const errors: Record<string, string> = {};

    // Name validation
    if (!values.name) {
      errors.name = "Name is required";
    }

    // Username validation
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 5) {
      errors.username = "Username must be at least 5 characters long";
    } else if (await checkUsernameExists(values.username)) {
      errors.username = "Username already exists";
    }

    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/.test(
        values.email
      )
    ) {
      errors.email = "Email is not valid";
    }

    return errors;
  };

  const handleSubmit = async (values: FormData) => {
    console.log("Form data:", values);
    // Additional code for form data submission can go here
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h3 className="card-title text-center">Registration Form - Example 4</h3>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage
              name="name"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <Field type="text" name="username" className="form-control" />
            <ErrorMessage
              name="username"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationFormComponent;
