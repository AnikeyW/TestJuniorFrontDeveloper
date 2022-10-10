import { Box, CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuctions } from '../actions';

function SearchQuery() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const isLoadingAuctionsList = useSelector((state) => state.auctions.isLoadingAuctionsList);
  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
    dispatch(getAuctions(e.target.value));
  };
  return (
    <Box display="flex">
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
