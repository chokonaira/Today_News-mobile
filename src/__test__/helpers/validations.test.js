import {
  usernameValidation,
  emailValidation,
  passwordValidation,
} from "../../helpers/validations";

describe("Input Validations", () => {
  it("validates for an empty username", () => {
    const validateUsername = usernameValidation("");
    expect(validateUsername).toEqual("Username cannot be empty");
  });

  it("validates for an username length", () => {
    const validateUsername = usernameValidation("hen");
    expect(validateUsername).toEqual("Username must be more than 4 characters");
  });

  it("validates for an username type", () => {
    const validateUsername = usernameValidation("1234");
    expect(validateUsername).toEqual("Username cannot be only digits");
  });

  it("validates for a correct username of all letters", () => {
    const validateUsername = usernameValidation("henry");
    expect(validateUsername).toEqual(null);
  });

  it("validates for a correct username of letters & digits", () => {
    const validateUsername = usernameValidation("henry2021");
    expect(validateUsername).toEqual(null);
  });

  it("Validates username and trims white spaces", () => {
    const validateUsername = usernameValidation("henry2021    ");
    expect(validateUsername).toEqual(null);
  });

  it("validates for an empty Email", () => {
    const validateEmail = emailValidation("");
    expect(validateEmail).toEqual("Email cannot be empty");
  });

  it("validates for an wrong Emails format", () => {
    let validate;
    [
      "henry",
      "henrry@",
      "henry@gmail",
      "henry.com",
      "@gmail.com",
      ".com",
    ].forEach((string) => {
      validate = emailValidation(string);
    });
    expect(validate).toEqual("Email format is incorrect");
  });

  it("Validates correct Email format", () => {
    const validateEmail = emailValidation("henry@gmail.com");
    expect(validateEmail).toEqual(null);
  });

  it("Validates Email and trims white spaces", () => {
    const validateEmail = emailValidation("henry@gmail.com    ");
    expect(validateEmail).toEqual(null);
  });

  it("validates for an empty password", () => {
    const validatePassword = passwordValidation("");
    expect(validatePassword).toEqual("Password cannot be empty");
  });

  it("validates incorrect Password length", () => {
    const validatePassword = passwordValidation("henry");
    expect(validatePassword).toEqual("Password should be more than 6 characters");
  });

  it("validates correct Password length", () => {
    const validatePassword = passwordValidation("okonkwo");
    expect(validatePassword).toEqual(null);
  });

  it("Validates Password and trims white spaces", () => {
    const validatePassword = passwordValidation("okonkwo    ");
    expect(validatePassword).toEqual(null);
  });

});
