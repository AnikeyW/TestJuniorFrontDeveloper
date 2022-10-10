import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, CircularProgress, Typography,
} from '@mui/material';
import { getCarInfo } from '../actions';

function CarInfo() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const auctions = useSelector((state) => state.auctions.auctionsList);
  const isLoadingCarInfo = useSelector((state) => state.cars.isLoadingCarInfo);
  const carInfo = useSelector((state) => state.cars.carInfo);
  useEffect(() => {
    dispatch(getCarInfo(params.id));
  }, []);
  const auction = auctions.find((car) => +car.id === +params.id);
  return (
    <Box>
      <Button onClick={() => navigate('/')}>Назад</Button>
      {isLoadingCarInfo && (
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <CircularProgress />
        </Box>
      )}
      {!isLoadingCarInfo && carInfo && (
        <Box>
          <Typography variant="h5">
            {auction.title}
          </Typography>
          <Box>
            <img src={`${process.env.CONFIG.IMAGES_BASEPATH}${auction.imgUrl}`} alt="" />
          </Box>
          <Box>
            Пробег:
            {carInfo.mileage}
            {' '}
            км.
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CarInfo;
