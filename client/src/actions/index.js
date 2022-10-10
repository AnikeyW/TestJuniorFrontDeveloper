import axios from 'axios';
import * as types from '../constants/actions';

export const getAuctions = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: types.SET_IS_LOADING_AUCTIONS_LIST, payload: true });
    const url = `${process.env.CONFIG.API_BASEPATH}/filterAuctions${searchQuery ? `?search=${searchQuery}` : ''}`;
    const response = await axios.get(url);
    dispatch({ type: types.GET_ALL_AUCTIONS, payload: response.data.auctions });
    dispatch({ type: types.SET_IS_LOADING_AUCTIONS_LIST, payload: false });
  } catch (e) {
    dispatch({ type: types.SET_IS_LOADING_AUCTIONS_LIST, payload: false });
    console.log(e);
  }
};
export const getAuctionsPooling = (searchQuery) => async (dispatch) => {
  try {
    const url = `${process.env.CONFIG.API_BASEPATH}/filterAuctions${searchQuery ? `?search=${searchQuery}` : ''}`;
    const response = await axios.get(url);
    dispatch({ type: types.GET_ALL_AUCTIONS, payload: response.data.auctions });
  } catch (e) {
    console.log(e);
  }
};
export const getCarInfo = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.SET_IS_LOADING_CAR_INFO, payload: true });
    const response = await axios.get(`${process.env.CONFIG.API_BASEPATH}/auction/:${id}`);
    dispatch({ type: types.SET_CAR_INFO, payload: response.data.auction });
    dispatch({ type: types.SET_IS_LOADING_CAR_INFO, payload: false });
  } catch (e) {
    dispatch({ type: types.SET_IS_LOADING_CAR_INFO, payload: false });
    console.log(e);
  }
};
