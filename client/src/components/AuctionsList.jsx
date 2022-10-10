import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import AuctionCard from './AuctionCard';

function AuctionsList() {
  const auctions = useSelector((state) => state.auctions.auctionsList);
  const isLoadingAuctionsList = useSelector((state) => state.auctions.isLoadingAuctionsList);
  return (
    <Grid container spacing={2}>
      {isLoadingAuctionsList && <div>Loading...</div>}
      {/* eslint-disable-next-line max-len */}
      {auctions.length !== 0 && auctions.map((auction) => <AuctionCard key={auction.id} auction={auction} />)}
    </Grid>
  );
}

export default AuctionsList;
