import * as Yup from "yup";
import useUsernameCheck from "./useUsernameCheck";

export const useRegistrationFormSchema = () => {
  const { checkUsernameExists } = useUsernameCheck();

  return Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string()
      .required("Username is required")
      .min(5, "Username must be at least 5 characters long")
      .test(
        "usernameExists",
        "Username already exists",
        async (username) => !(await checkUsernameExists(username || ""))
      ),
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
  });
};
