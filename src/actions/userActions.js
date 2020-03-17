import {
  SET_AUTH,
  SET_CURRENT_USER,
  SET_LOGIN_PAGE_ERROR
} from '../constants/AppConstants';
import {
  removeFromSessionStorage,
  saveToSessionStorage
} from '../lib/browserStorage';
import { handleError } from './errorActions';
import userService from '../services/UserService';
import history from '../store/history';

export const login = (email, password) => async (dispatch, state) => {
  dispatch({ type: SET_LOGIN_PAGE_ERROR, loginApiFailureMessage: '' });

  const response = await userService.login(email, password);

  if (response.meta.statusCode === 200) {
    const currentSession = response.data;

    //save current session in sessionStorage
    saveToSessionStorage('currentSession', JSON.stringify(currentSession));

    dispatch({ type: SET_AUTH, payload: currentSession });

    history.push('/home/dashboard');
  } else {
    dispatch(handleError(SET_LOGIN_PAGE_ERROR, response.meta.errorMessage));
  }
};

export const logout = history => async (dispatch, state) => {
  const response = await userService.logout();

  if (response.meta.statusCode === 200) {
    //remove current session from sessionStorage
    removeFromSessionStorage('currentSession');

    //go to login page
    history.push('/');

    dispatch({ type: SET_AUTH, payload: {} });
  } else {
    dispatch(handleError(SET_LOGIN_PAGE_ERROR, response.meta.errorMessage));
  }
};

export const whoAmI = () => async (dispatch, state) => {
  const response = await userService.whoAmI();

  if (response.meta.statusCode === 200) {
    dispatch({
      type: SET_CURRENT_USER,
      payload: response.data
    });
  } else {
    dispatch(handleError(SET_LOGIN_PAGE_ERROR, response.meta.errorMessage));
    //go to login page
    history.push('/');
  }
};

export const setAuth = currentSession => (dispatch, state) => {
  dispatch({ type: SET_AUTH, payload: currentSession });
};
