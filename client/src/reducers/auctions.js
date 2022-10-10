import * as types from '../constants/actions';

const initialState = {
  auctionsList: [],
  isLoadingAuctionsList: false,
};

const auctions = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_AUCTIONS: {
      return { ...state, auctionsList: action.payload };
    }
    case types.SET_IS_LOADING_AUCTIONS_LIST: {
      return { ...state, isLoadingAuctionsList: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default auctions;
