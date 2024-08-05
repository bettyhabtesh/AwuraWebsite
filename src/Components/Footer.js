import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({ homeRef, servicesRef, productsRef, clientsRef }) => {
  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ bgcolor: '#304880', color: '#FFF', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Link href="#" onClick={() => handleScroll(homeRef)} color="inherit" underline="none">Home</Link>
          </Grid>
          <Grid item>
            <Link href="#services" onClick={() => handleScroll(servicesRef)} color="inherit" underline="none">Services</Link>
          </Grid>
          <Grid item>
            <Link href="#products" onClick={() => handleScroll(productsRef)} color="inherit" underline="none">Products</Link>
          </Grid>
          <Grid item>
            <Link href="#clients" onClick={() => handleScroll(clientsRef)} color="inherit" underline="none">Clients</Link>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, bgcolor: '#FFF', width: '50%', mx: 'auto' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Link href="https://www.instagram.com/awura_et?igsh=MTI4eGl6dXlzMWlzaA==" color="inherit" sx={{ mx: 1 }}>
            <InstagramIcon />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100092874956734&mibextid=ZbWKwL" color="inherit" sx={{ mx: 1 }}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.linkedin.com/company/awura/" color="inherit" sx={{ mx: 1 }}>
            <LinkedInIcon />
          </Link>
        </Box>
        <Typography variant="body2" align='center' style={{ color: "white" }}>
          &copy; {new Date().getFullYear()} Awura. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
