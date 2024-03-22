export const checkValidateData = (email, password, name) => {
  const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!isNameValid) return "Invalid Name";
  if (!isEmailVaild) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
