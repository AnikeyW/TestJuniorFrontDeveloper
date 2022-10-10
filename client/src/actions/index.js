import axios from 'axios';
import * as types from '../constants/actions';

export const getAuctions = () => async (dispatch) => {
  try {
    dispatch({ type: types.SET_IS_LOADING_AUCTIONS_LIST, payload: true });
    const response = await axios.get(`${process.env.CONFIG.API_BASEPATH}/filterAuctions`);
    dispatch({ type: types.GET_ALL_AUCTIONS, payload: response.data.auctions });
    dispatch({ type: types.SET_IS_LOADING_AUCTIONS_LIST, payload: false });
  } catch (e) {
    dispatch({ type: types.SET_IS_LOADING_AUCTIONS_LIST, payload: false });
    console.log(e);
  }
};
export const getAuctionsPooling = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.CONFIG.API_BASEPATH}/filterAuctions`);
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
