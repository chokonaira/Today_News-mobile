
export const usernameValidation = (username) => {
  let message = undefined;
  const isnum = /^\d+$/.test(username);
  if (username.trim() === "") {
    message = "Username cannot be empty";
  } else if (username.trim().length < 4) {
    message = "Username must be more than 4 characters";
  } else if (isnum) {
    message = "Username cannot be only digits";
  }
  return message;
};

export const passwordValidation = (password) => {
  let message;
  if (password.trim() === "") {
    massage = "Password cannot be empty";
  } else if (password.trim().length < 6) {
    message = "Password should be more than 6 characters";
  }
  return message;
};

export const emailValidation = (email) => {
  let message;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.trim() === "") {
    message = "Email cannot be empty";
  } else if (!emailRegex.test(String(email).toLowerCase())) {
    message = "Email format is incorrect";
  }
  return message;
};
