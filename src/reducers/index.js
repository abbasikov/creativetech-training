/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return objectAssign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import {
  INITIAL_STATE,
  SET_AUTH,
  SET_ERROR_MESSAGE,
  SET_CURRENT_BIDS,
  SET_SHOW_SIDEBAR,
  SET_HOME_SCREEN_LOADING,
  SET_LOGIN_PAGE_ERROR,
  SET_GENERIC_ERROR,
  SET_CURRENT_USER
} from '../constants/AppConstants';
import _ from 'lodash';

// Object.assign is not yet fully supported in all browsers, so we fallback to a polyfill
const objectAssign = Object.assign || require('object.assign');

// Takes care of changing the application state
// Never mutate or manipulate state directly. Always return a new state.
export default function rootReducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case SET_AUTH:
      return objectAssign({}, state, {
        currentSession: _.isEmpty(action.payload.session)
          ? null
          : action.payload.session
      });
    case SET_CURRENT_USER:
      return objectAssign({}, state, {
        currentUser: _.isEmpty(action.payload) ? null : action.payload
      });
    case SET_ERROR_MESSAGE:
      return objectAssign({}, state, {
        errorMessage: action.message
      });
    case SET_HOME_SCREEN_LOADING:
      return objectAssign({}, state, {
        homeScreenLoading: action.homeScreenLoading
      });
    case SET_CURRENT_BIDS:
      return objectAssign({}, state, {
        currentBids: action.currentBids
      });
    case SET_SHOW_SIDEBAR:
      return objectAssign({}, state, {
        showSidebar: action.showSidebar
      });
    case SET_LOGIN_PAGE_ERROR:
      return objectAssign({}, state, {
        loginPageErrorMsg: action.payload
      });
    case SET_GENERIC_ERROR:
      return objectAssign({}, state, {
        errorDetails: action.errorDetails
      });
    default:
      return state;
  }
}
