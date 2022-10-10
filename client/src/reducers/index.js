import { combineReducers } from 'redux';
import auctions from './auctions';
import cars from './cars';

export default combineReducers({
  auctions,
  cars,
});
