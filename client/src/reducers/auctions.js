import * as types from '../constants/actions';

const initialState = {
  auctionsList: [],
  isLoadingAuctionsList: false,
  searchQuery: '',
};

const auctions = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
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
