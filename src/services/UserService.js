import api from '../lib/api';
import { NETWORK_ERROR_MSG } from '../constants/MessageConstants';

const handleError = error => {
  //True:API Failure
  //False: Network Failure
  if (error.response) {
    return error.response.data;
  } else {
    return {
      meta: {
        errorMessage: NETWORK_ERROR_MSG
      }
    };
  }
};

const login = async (email, password) => {
  try {
    const response = await api.post('/api/users/signin', { email, password });
    return response.data;
  } catch (e) {
    console.log(e);
    return handleError(e);
  }
};

const logout = async () => {
  try {
    const response = await api.post('/api/users/signout');
    return response.data;
  } catch (e) {
    console.log(e);
    return handleError(e);
  }
};

const whoAmI = async () => {
  try {
    const response = await api.get('/api/users/me');
    return response.data;
  } catch (e) {
    console.log(e);
    return handleError(e);
  }
};

export default {
  login,
  logout,
  whoAmI
};
