import { SET_PRODUCTS } from './types';
import * as Api from '../service/api';

export const setProducts = () => dispatch => {
  return Api.getProducts().then(res => {
    const { products } = res.data;
    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  });
};
