import { store } from '../store/configureStore';

const responseErrorHandler = error => {
  if (!error.response || error.response.status === 401) {
    //store.dispatch();
  }
  return Promise.reject(error);
};

export default responseErrorHandler;
