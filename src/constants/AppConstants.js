/*
 * AppConstants
 * These are the variables that determine what our central data store (reducer.js)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */

// The initial application state
export const INITIAL_STATE = {
  currentUser: {},
  currentSession: {}
};

//Actions
export const SET_AUTH = 'SET_AUTH';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_GENERIC_ERROR = 'SET_GENERIC_ERROR';
export const SENDING_REQUEST = 'SENDING_REQUEST';
export const SET_CURRENT_BIDS = 'SET_CURRENT_BIDS';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_HOME_SCREEN_LOADING = 'SET_HOME_SCREEN_LOADING';
export const SET_SHOW_SIDEBAR = 'SET_SHOW_SIDEBAR';
export const SET_LOGIN_PAGE_ERROR = 'SET_LOGIN_PAGE_ERROR';
