import ucFirst from './ucFirst'
import lcFirst from './lcFirst'

const camelCase = (str) => {
  let camelCased = ''
  // Get each word from the string
  const words = str.match(/\w+/g)
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (i !== 0) {
      word = ucFirst(word)
    } else {
      word = lcFirst(word)
    }
    camelCased += word
  }
  return camelCased
}

export default camelCase
