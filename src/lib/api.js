import axios from 'axios';
import getBearerToken from './getBearerToken';
import cloudNosticApi from '../config/cloudNosticApi';
import _ from 'lodash';

const authIntercepter = config => {
  var token = getBearerToken();
  if (!_.isEmpty(token)) {
    config.headers['Authorization'] = token;
  } else {
    console.log('token is empty');
  }

  return config;
};

let api;

if (process.env.NODE_ENV !== 'test') {
  api = axios.create({
    baseURL: cloudNosticApi.baseURL
  });
  // skip adding Authentication interceptors for unit-tests
  api.interceptors.request.use(authIntercepter, e => Promise.reject(e));
} else {
  api = axios;
}

export default api;
