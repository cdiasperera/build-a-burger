const checkRules = (value, rules) => {
  if (rules.required) {
    if (!value.length > 0) {
      return false
    }
  }

  if (rules.isEmail) {
    // Make sure that the @ separates the domain and local-part and that the
    // email doesn't end with an @
    if (
      value.match(/[^@]+/g).length !== 2 ||
      value.charAt(value.length - 1) === '@') {
      return false
    }
  }

  if (rules.minLength) {
    if (value.length < 7) {
      return false
    }
  }
  // Passed on the rules, can return true
  return true
}

export default checkRules
