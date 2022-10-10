import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getTimeToEnd from '../utils/getTimeToEnd';

const AuctionCard = React.memo(({ auction }) => {
  const navigate = useNavigate();
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    setEndTime(getTimeToEnd(auction.finishTime));
    const endTimeInterval = setInterval(() => {
      setEndTime(getTimeToEnd(auction.finishTime));
    }, 1000);
    return () => clearInterval(endTimeInterval);
  }, [auction.finishTime]);

  return (
    <Grid
      item
      xs={4}
      onClick={() => navigate(`${auction.id}`)}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ background: '#eee', padding: '0 10px', cursor: 'pointer' }}
      >
        <Typography variant="h5">{auction.title}</Typography>
        <Box>{endTime}</Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          height: '230px',
          backgroundImage: `url(${process.env.CONFIG.IMAGES_BASEPATH}${auction.imgUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
        }}
      >
        <div style={{
          alignSelf: 'self-end',
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
        }}
        >
          <div style={{ background: 'lightgray', padding: '5px', fontWeight: '600' }}>{`Ставка: ${auction.bid} р`}</div>
        </div>
      </Box>
    </Grid>
  );
});

export default AuctionCard;
