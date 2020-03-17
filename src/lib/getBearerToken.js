import { store } from '../store/configureStore';

function getBearerToken() {
  let token;

  if (!store) {
    console.log('Unable to getBearerToken, no store found');
    return null;
  }

  const state = store.getState();

  if (!state) {
    console.log('Unable to getBearerToken, store does not have state');
    return null;
  }

  const validatedSession = state.currentSession;

  if (!validatedSession) {
    console.log(
      'Unable to getBearerToken, store does not have  currentSession, most likely user did not login'
    );
    return null;
  }

  const jwtToken = validatedSession.token;

  if (!jwtToken) {
    console.log(
      "Unable to getBearerToken, store's currentSession does not have accessToken, most likely user did not login"
    );
    return null;
  }
  token = jwtToken;

  return token;
}

export default getBearerToken;
