import React, { useState, ChangeEvent, FormEvent } from "react";
import useUsernameCheck from "./useUsernameCheck";

interface FormData {
  name: string;
  username: string;
  email: string;
}

interface FormErrors {
  name?: string;
  username?: string;
  email?: string;
}

const RegistrationFormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const { checkUsernameExists } = useUsernameCheck();

  // Validation for all fields
  const validate = async (fieldValues: Partial<FormData> = formData) => {
    const tempErrors: FormErrors = { ...formErrors };

    // Validation for name
    if ("name" in fieldValues)
      tempErrors.name = fieldValues.name ? "" : "Name is required.";

    // Validation for username
    if ("username" in fieldValues) {
      tempErrors.username = fieldValues.username
        ? fieldValues.username.length >= 5
          ? ""
          : "Username must be at least 5 characters long."
        : "Username is required.";

      if (!tempErrors.username) {
        const usernameTaken = await checkUsernameExists(
          fieldValues.username || ""
        );
        if (usernameTaken) {
          tempErrors.username = "Username already exists.";
        }
      }
    }

    //Validation for email
    if ("email" in fieldValues)
      tempErrors.email =
        /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/.test(
          fieldValues.email || ""
        )
          ? ""
          : "Email is not valid.";

    setFormErrors(tempErrors);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate(formData); // validate all fields on submit
    if (formIsValid()) {
      console.log("Form data:", formData);
      // Additional code for form data submission can go here
    } else {
      console.log("Form data is invalid.");
    }
  };

  const formIsValid = (): boolean => {
    const isValid =
      Object.values(formData).every((value) => value) &&
      Object.values(formErrors).every((error) => !error);
    return isValid;
  };

  return (
    <>
      <h3 className="card-title text-center">Registration Form - Example 3</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <div className="alert alert-danger">{formErrors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && (
            <div className="alert alert-danger">{formErrors.username}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <div className="alert alert-danger">{formErrors.email}</div>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegistrationFormComponent;
