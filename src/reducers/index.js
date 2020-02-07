import { combineReducers } from 'redux';

import navbarReducer from './navbarReducer';
import productReducer from './productReducer';

export default combineReducers({
  navbar: navbarReducer,
  product: productReducer,
});
