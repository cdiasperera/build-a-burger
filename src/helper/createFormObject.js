import camelCase from './camelCase'

const createFormObject = (elementType, label, type, rules) => {
  return {
    elementType: elementType,
    elementConfig: {
      label: label,
      name: camelCase(label),
      type: type,
      placeholder: 'Your ' + label
    },
    rules: rules
  }
}

export default createFormObject
