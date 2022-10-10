import { useSelector } from 'react-redux';
import { Box, CircularProgress, Grid } from '@mui/material';
import AuctionCard from './AuctionCard';

function AuctionsList() {
  const auctions = useSelector((state) => state.auctions.auctionsList);
  const isLoadingAuctionsList = useSelector((state) => state.auctions.isLoadingAuctionsList);
  return (
    <Grid container spacing={2} height="100%">
      {isLoadingAuctionsList && (
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <CircularProgress />
      </Box>
      )}
      {auctions.length !== 0 && auctions.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />))}
    </Grid>
  );
}

export default AuctionsList;
