import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuctionCard({ auction }) {
  const navigate = useNavigate();
  const [endTime, setEndTime] = useState('');
  function getEndTime() {
    if (auction.finishTime - Date.now() <= 0) {
      setEndTime('00:00');
      return;
    }
    const d = new Date(auction.finishTime - Date.now());
    const min = d.getMinutes().toString().padStart(2, '0');
    const sec = d.getSeconds().toString().padStart(2, '0');
    setEndTime(`${min}:${sec}`);
  }
  useEffect(() => {
    getEndTime();
    const endTimeInterval = setInterval(() => {
      getEndTime();
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
}

export default AuctionCard;
