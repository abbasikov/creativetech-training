import axios from 'axios';
import getBearerToken from './getBearerToken';
import responseErrorHandler from './responseErrorHandler';
import confAssetApi from '../config/confAssetApi';

const authIntercepter = config => {
  config.headers.Authorization = `${getBearerToken()}`;

  if (confAssetApi && confAssetApi.apiKey.length > 0) {
    config.headers['x-api-key'] = confAssetApi.apiKey;
  }

  return config;
};

let assetApi;

if (process.env.NODE_ENV !== 'test') {
  assetApi = axios.create({
    baseURL: confAssetApi.baseURL
  });
  // skip adding Authentication interceptors for unit-tests
  assetApi.interceptors.request.use(authIntercepter, e => Promise.reject(e));
  assetApi.interceptors.response.use(r => r, responseErrorHandler);
} else {
  assetApi = axios;
}

export default assetApi;
