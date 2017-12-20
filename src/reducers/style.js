import { STYLE_TOGGLE } from '../actions';

const getStyle = (isToggled) => {
  if (isToggled) {
    return {
      __primaryBackgroundColor: '#3166f1',
      __primaryBackgroundColorDisabled: '#479bfe',
      __primaryColor: '#ffffff',
      __primaryColorDisabled: '#a9d0fa'
    };
  }

  return {
    __primaryBackgroundColor: 'black',
    __primaryBackgroundColorDisabled: 'gray',
    __primaryColor: 'white',
    __primaryColorDisabled: 'gainsboro'
  };
};

const reducer = (
  state = {
    isToggled: false,
    values: getStyle(false)
  },
  {
    payload,
    type
  }
) => {
  if (type === STYLE_TOGGLE) {
    const isToggled = !state.isToggled;

    return {
      isToggled,
      values: getStyle(isToggled)
    };
  }

  return state;
}

export default reducer;
