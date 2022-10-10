import { Box, CircularProgress, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAuctions } from '../actions';
import * as types from '../constants/actions';

function SearchQuery() {
  const dispatch = useDispatch();
  const isLoadingAuctionsList = useSelector((state) => state.auctions.isLoadingAuctionsList);
  const searchQuery = useSelector((state) => state.auctions.searchQuery);

  const searchQueryHandler = (e) => {
    dispatch({ type: types.SET_SEARCH_QUERY, payload: e.target.value });
    dispatch(getAuctions(e.target.value));
  };

  return (
    <Box display="flex">
      <Box width={300}>
        <TextField
          id="outlined-search"
          label="Поиск по названию"
          type="search"
          style={{
            marginBottom: '25px',
          }}
          value={searchQuery}
          onChange={(e) => searchQueryHandler(e)}
        />
      </Box>
      {isLoadingAuctionsList && (
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginRight: '200px',
        }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default SearchQuery;
