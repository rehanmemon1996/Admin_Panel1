import React from 'react';
import 'tailwindcss/tailwind.css';
import DonationCard from './Card';
import { Grid, Container } from '@mui/material';
// import  Videos from './Video'
const Home = () => {
  return( <Container>
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DonationCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DonationCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DonationCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DonationCard />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3} lg={3}>
        {/* <Videos/> */}
      </Grid>
      
      
    </Grid>
  </Container>
  );
};

export default Home;
