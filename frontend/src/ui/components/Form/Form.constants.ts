const INPUT_NAME = {
  NAME: "name",
  EMAIL: "email address",
  PASSWORD: "password",
};
const REQUIRED = (inputName: string) => `${inputName} is required`;
const INVALID = (inputName: string) => `Invalid ${inputName}`;
const DOES_NOT_MATCH = (inputName: string) =>
  `Confirm ${inputName} does not match`;
export { INPUT_NAME, REQUIRED, INVALID, DOES_NOT_MATCH };
