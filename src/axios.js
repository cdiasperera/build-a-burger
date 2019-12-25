import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://build-a-burger-9d2e7.firebaseio.com/'
})

export default instance
