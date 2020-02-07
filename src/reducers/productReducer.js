import { SET_PRODUCTS } from '../actions/types';

const initialState = {
  starter: null,
  medium: null,
  full: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        starter: action.payload[0],
        medium: action.payload[1],
        full: action.payload[2],
      };
    default:
      return state;
  }
}
