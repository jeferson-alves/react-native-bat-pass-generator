export function generatePass() {
  let password: string = "";
  let characters: string =
    "@#$!1234567890ABCDEFGHIJKLMNOPQRSTUVXYZWabcdefghijklmnopqrstuvxyzw";
  let passwordLength = 8;

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}
