import { SET_ITEM } from './types';

export const setItem = item => ({
  type: SET_ITEM,
  payload: item,
});
