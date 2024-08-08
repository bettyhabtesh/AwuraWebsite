import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({ homeRef, servicesRef, productsRef, clientsRef }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const handleNavigation = (targetSection) => {
    if (location.pathname === '/') {
      handleScroll(targetSection);
    } else {
      navigate('/', { state: { scrollTo: targetSection } });
    }
  };

  return (
    <Box sx={{ bgcolor: '#304880', color: '#FFF', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <RouterLink
              to="/"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onClick={() => handleNavigation(homeRef)}
            >
              Home
            </RouterLink>
          </Grid>
          <Grid item>
            <RouterLink
              to="/"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onClick={() => handleNavigation(servicesRef)}
            >
              Services
            </RouterLink>
          </Grid>
          <Grid item>
            <RouterLink
              to="/"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onClick={() => handleNavigation(productsRef)}
            >
              Products
            </RouterLink>
          </Grid>
          <Grid item>
            <RouterLink
              to="/"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onClick={() => handleNavigation(clientsRef)}
            >
              Clients
            </RouterLink>
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
