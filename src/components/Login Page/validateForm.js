export const validateSignUpForm = (values) => {
  const { email, password, confirmPassword } = values;
  let errors = {};

  // to check user entered all required information
  if (!email || !password || !confirmPassword) {
    if (!email) errors.email = "Required";
    if (!password) errors.password = "Required";
    if (!confirmPassword) errors.confirmPassword = "Required";
    return errors;
  }

  // to check whether the email entered is in correct format
  if (email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address.";
      return errors;
    }
  }

  // to check whether passwords is 8 character long and whethet they are matching or not
  if (email && password && confirmPassword) {
    const passwordRegex = /(?=.*[0-9])/;
    if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
      return errors;
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain one number.";
      return errors;
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
      return errors;
    }
  }

  // to check if we have already have the entered email id registered with us
  if (localStorage.getItem(values.email)) {
    errors.email = "User with this email already exist";
  } 

  return errors;
};

export const validateLoginForm = (values) => {
  const { email, password } = values;
  let errors = {};

  // to check whether the email entered is in correct format
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!email) {
    errors.email = "Required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!password) {
    errors.password = "Required";
  }

  if (email && password && !localStorage.getItem(values.email)) {
    errors.general = "Invalid Login Credential";
  }

  return errors;
};
