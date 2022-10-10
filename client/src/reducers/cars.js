import * as types from '../constants/actions';

const initialState = {
  carInfo: null,
  isLoadingCarInfo: false,
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CAR_INFO: {
      return { ...state, carInfo: action.payload };
    }
    case types.SET_IS_LOADING_CAR_INFO: {
      return { ...state, isLoadingCarInfo: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default cars;
