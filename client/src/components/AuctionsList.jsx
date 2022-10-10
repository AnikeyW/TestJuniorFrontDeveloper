import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import AuctionCard from './AuctionCard';
import SearchQuery from './SearchQuery';

function AuctionsList() {
  const auctions = useSelector((state) => state.auctions.auctionsList);
  const isLoadingAuctionsList = useSelector((state) => state.auctions.isLoadingAuctionsList);

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
