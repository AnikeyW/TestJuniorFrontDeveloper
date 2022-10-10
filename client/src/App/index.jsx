import {
  Box, Container, Divider, Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuctions } from '../actions';
import AuctionsList from '../components/AuctionsList';
import CarInfo from '../components/CarInfo';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
  }, []);
  return (
    <Router>
      <Container>
        <Box mt={3} mb={2}>
          <Typography variant="h1" fontSize="h3.fontSize">
            Тестовое приложение Аукционы
          </Typography>
        </Box>

        <Box mb={3}>
          <Divider />
        </Box>

        <Routes>
          <Route path="/" element={<AuctionsList />} />
          <Route path=":id" element={<CarInfo />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
