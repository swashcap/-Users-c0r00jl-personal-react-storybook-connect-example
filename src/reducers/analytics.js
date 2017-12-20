import { ANALYTICS_BUTTON_PRESS } from '../actions';

const reducer = (
  state = {
    __buttonPressCount: 0
  },
  {
    payload,
    type
  }
) => {
  if (type === ANALYTICS_BUTTON_PRESS) {
    return {
      __buttonPressCount: state.__buttonPressCount += 1
    };
  }

  return state;
}

export default reducer;
