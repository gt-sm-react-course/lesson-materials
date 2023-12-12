import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRegistrationFormSchema } from "./useValidationSchema";

interface FormData {
  name: string;
  username: string;
  email: string;
}

const RegistrationFormComponent: React.FC = () => {
  const validationSchema = useRegistrationFormSchema();

  const initialValues: FormData = {
    name: "",
    username: "",
    email: "",
  };

  const handleSubmit = async (values: FormData) => {
    console.log("Form data:", values);
    // Additional code for form data submission can go here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h3 className="card-title text-center">Registration Form - Example 5</h3>

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
