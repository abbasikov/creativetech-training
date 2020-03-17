import axios from 'axios';
import confAuthLoggerApi from '../config/confAuthLoggerApi';

const authIntercepter = config => {
  if (confAuthLoggerApi && confAuthLoggerApi.apiKey.length > 0) {
    config.headers['x-api-key'] = confAuthLoggerApi.apiKey;
  }

  return config;
};

let authLoggerApi;

if (process.env.NODE_ENV !== 'test') {
  authLoggerApi = axios.create({
    baseURL: confAuthLoggerApi.baseURL
  });
  // skip adding Authentication interceptors for unit-tests
  authLoggerApi.interceptors.request.use(authIntercepter, e =>
    Promise.reject(e)
  );
} else {
  authLoggerApi = axios;
}

export default authLoggerApi;
