export const checkValidateData = (email, password) => {
  const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const isNameValid = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  // if (!isNameValid) return "Invalid Name";
  const result = !isEmailVaild
    ? {
        name: "email",
        errMsg: "Please enter a valid email address.",
      }
    : !isPasswordValid
    ? {
        name: "password",
        errMsg: "Please enter a valid Password",
      }
    : null;

  return result;
};
