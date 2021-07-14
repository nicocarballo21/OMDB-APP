export default function validatePassword(pass) {
  return pass.length < 5 ? true : false
}
