import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import AuctionCard from './AuctionCard';
import SearchQuery from './SearchQuery';
import { getAuctions, getAuctionsPooling } from '../actions';

function AuctionsList() {
  const dispatch = useDispatch();
  const auctions = useSelector((state) => state.auctions.auctionsList);
  const searchQuery = useSelector((state) => state.auctions.searchQuery);
  const isLoadingAuctionsList = useSelector((state) => state.auctions.isLoadingAuctionsList);

  useEffect(() => {
    dispatch(getAuctions(searchQuery));
    const poolingInterval = setInterval(() => {
      dispatch(getAuctionsPooling(searchQuery));
    }, process.env.CONFIG.POLLING_INTERVAL * 1000);
    return () => clearInterval(poolingInterval);
  }, [searchQuery]);

  return (
    <Box style={{ paddingBottom: '15px' }}>
      <SearchQuery />
      <Grid container spacing={2} height="100%">
        {auctions.length !== 0 ? auctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />))
          : (!isLoadingAuctionsList && <Box style={{ marginLeft: '20px' }}>Нет данных.</Box>)}
      </Grid>
    </Box>
  );
}

export default AuctionsList;
