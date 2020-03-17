import { GENERIC_ERROR_MSG } from '../constants/MessageConstants';

export const handleError = (actionType, payloadData = GENERIC_ERROR_MSG) => (
  dispatch,
  state
) => {
  dispatch({
    type: actionType,
    payload: payloadData
  });
};
