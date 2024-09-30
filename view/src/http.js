import axios from 'axios'

let http = axios.create({
  baseURL: 'http://localhost:5122/api',
  headers: {
    'Content-type': 'application/json'
  }
})

export default http