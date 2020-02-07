import { SET_ITEM } from '../actions/types';

const initialState = {
  selectedItem: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
}
