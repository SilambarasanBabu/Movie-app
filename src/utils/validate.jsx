//validation for sign in/sign up
//need to build name validation (task)
export const checkValidate = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordVaild =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Enter a valid E-mail";
  if (!isPasswordVaild) return "Enter a valid Password";

  return null;
};

export const checkValidateFullname = (name) => {
  const isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name.trim());

  if (!isNameValid) return "Enter a full name";

  return null;
};
