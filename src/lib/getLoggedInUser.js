import { store } from '../store/configureStore';

const getLoggedInUser = () => {
  if (!store) {
    return;
  }

  const state = store.getState();

  if (
    state &&
    state.userProfile &&
    state.userProfile.userSession &&
    state.userProfile.userSession.attributes
  ) {
    const attributes = state.userProfile.userSession.attributes;
    const email = attributes['email'];
    const familyName =
      attributes['given_name'] + ' ' + attributes['family_name'];
    const member = { emailAddress: email, fullName: familyName };
    return member;
  }

  return;
};

export default getLoggedInUser;
