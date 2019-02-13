import axios from 'axios'
import Config from '../config/Config'

const newAxios = (config = {}) => {
  return axios.create(Object.assign({}, config))
}
const fetch = (config = {}, url = 'http://api.tushare.pro') => {
  return newAxios().request(Object.assign({ url: url, method: 'post', token: Config.token }, config))
    .then(response => {
      return response
    })
}

const post = (config = {}) => {
  return axios.post('http://api.tushare.pro', Object.assign({ token: Config.token }, config))
    .then(resp => {
      return resp.data
    })
}

export default {
  fetch, post
}
