
export const usernameValidation = (username) => {
  let message = null;
  let value = username.trim()
  const isnum = /^\d+$/.test(value);
  if (value === "") {
    message = "Username cannot be empty";
  } else if (value.length < 4) {
    message = "Username must be more than 4 characters";
  } else if (isnum) {
    message = "Username cannot be only digits";
  }
  return message;
};

export const emailValidation = (email) => {
  let message = null;
  let value = email.trim();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value === "") {
    message = "Email cannot be empty";
  } else if (!emailRegex.test(String(value).toLowerCase())) {
    message = "Email format is incorrect";
  }
  return message;
};

export const passwordValidation = (password) => {
  let message = null;
  let value = password.trim();
  if (value === "") {
    message = "Password cannot be empty";
  } else if (value.length < 6) {
    message = "Password should be more than 6 characters";
  }
  return message;
};
