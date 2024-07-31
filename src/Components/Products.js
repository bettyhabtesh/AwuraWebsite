import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Link, IconButton, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import appStore from '../Assets/appStore.png';
import googlePlay from '../Assets/googlePlay.png';
import phone from '../Assets/phone.png';
import labex from '../Assets/labex.png';
import farm from '../Assets/farm.png';
import meklit from '../Assets/meklit.png';

const CustomButton = styled(Button)({
  background: 'radial-gradient(circle, rgba(0,123,255,1) 0%, rgba(0,123,255,0.9) 50%, rgba(0,123,255,0.7) 100%)',
  color: '#fff',
  marginTop: '16px',
  padding: '8px 16px',
  borderRadius: '8px',
  '&:hover': {
    background: 'radial-gradient(circle, rgba(0,123,255,0.9) 0%, rgba(0,123,255,0.7) 50%, rgba(0,123,255,0.5) 100%)',
  },
});

const LinkButton = styled('a')({
  display: 'flex',
  alignItems: 'center',
  margin: '0 8px',
  padding: '8px 16px',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
  textDecoration: 'none',
  '& img': {
    width: '24px',
    height: 'auto',
    marginRight: '8px',
  },
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

const Products = React.forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState(0);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const sections = [
    {
      title: "Discover OwlEvents",
      description: "OwlEvents is a digital platform designed to streamline the process of planning, managing and coordinating events of various types and sizes.",
      image: phone,
      appStoreLink: "https://www.apple.com/app-store/",
      googlePlayLink: "https://play.google.com/store",
      websiteLink: "https://owlevents.app/",
    },
    {
      title: "Discover LabExAfrica",
      description: "LabExAfrica is a project we did to streamline the process of planning, managing and coordinating events of various types and sizes.",
      image: labex,
      appStoreLink: "https://www.apple.com/app-store/",
      googlePlayLink: "https://play.google.com/store",
      websiteLink: "https://portal.labexafrica.com/",
    },
    {
      title: "Discover Farm",
      description: "Farm is a digital platform designed to streamline the process of agricultural management and coordination.",
      image: farm,
      appStoreLink: "https://www.apple.com/app-store/",
      googlePlayLink: "https://play.google.com/store",
      websiteLink: "https://maed.farm/auth/login",
    },
    {
      title: "Discover Meklit",
      description: "Meklit is a digital platform designed to streamline various processes in different industries.",
      image: meklit,
      appStoreLink: "https://www.apple.com/app-store/",
      googlePlayLink: "https://play.google.com/store",
      websiteLink: "https://meklit.life/",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sections.length]);

  const handleDotClick = (index) => {
    setActiveSection(index);
  };

  const currentSection = sections[activeSection];

  return (
    <Box ref={ref} mt={4} textAlign="center" sx={{ height: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: { xs: '24px', sm: '30px', md: '40px' } }}
      >
        Products
      </Typography>
      {!isSmallScreen && (
        <Typography
          variant="body1"
          mb={4}
          sx={{ mx: "auto", maxWidth: "800px", fontSize: { xs: '14px', sm: '16px' } }}
        >
          We offer a diverse range of high-quality products to meet the varied needs of our customers. Our product portfolio includes cutting-edge technology solutions as well as innovative consumer goods for the home and outdoors. Whether you're looking for enterprise software, smart home devices, or stylish outdoor gear, you'll find it all under one roof with Awura.
        </Typography>
      )}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <Box
          textAlign={isSmallScreen ? "center" : "left"}
          maxWidth={{ xs: '100%', sm: '400px' }}
          mb={{ xs: 4, sm: 0 }}
          mr={{ sm: 4 }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#4a90e2", fontSize: { xs: '20px', sm: '24px', md: '30px' } }}
          >
            {currentSection.title}
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            sx={{ fontSize: { xs: '14px', sm: '16px' } }}
          >
            {currentSection.description}
          </Typography>
          <Link href={currentSection.websiteLink} target="_blank" rel="noopener noreferrer">
            <CustomButton variant="contained" sx={{ display: 'block', mx: 'auto' }}>
              Go to website
            </CustomButton>
          </Link>
        </Box>
        <Box
          sx={{
            height: { xs: '200px', sm: '400px' },
            width: 'auto',
            mb: { xs: 4, sm: 0 }
          }}
        >
          <img
            src={currentSection.image}
            alt="Display"
            style={{ height: "100%", width: "auto" }}
          />
          {isSmallScreen && (
            <Box display="flex" justifyContent="center" mt={2}>
              <LinkButton href={currentSection.appStoreLink} target="_blank" rel="noopener noreferrer">
                <img src={appStore} alt="Download on the App Store" />
                <Typography sx={{ color: '#000', fontSize: { xs: '10px', sm: '12px' } }}>
                  Download on the App Store
                </Typography>
              </LinkButton>
              <LinkButton href={currentSection.googlePlayLink} target="_blank" rel="noopener noreferrer">
                <img src={googlePlay} alt="Get it on Google Play" />
                <Typography sx={{ color: '#000', fontSize: { xs: '10px', sm: '12px' } }}>
                  Get it on Google Play
                </Typography>
              </LinkButton>
            </Box>
          )}
        </Box>
      </Box>
      {!isSmallScreen && (
        <Box display="flex" justifyContent="center" mt={4}>
          <LinkButton href={currentSection.appStoreLink} target="_blank" rel="noopener noreferrer">
            <img src={appStore} alt="Download on the App Store" />
            <Typography sx={{ color: '#000', fontSize: { xs: '10px', sm: '12px' } }}>
              Download on the App Store
            </Typography>
          </LinkButton>
          <LinkButton href={currentSection.googlePlayLink} target="_blank" rel="noopener noreferrer">
            <img src={googlePlay} alt="Get it on Google Play" />
            <Typography sx={{ color: '#000', fontSize: { xs: '10px', sm: '12px' } }}>
              Get it on Google Play
            </Typography>
          </LinkButton>
        </Box>
      )}
      <Box display="flex" justifyContent="center" mt={4}>
        {sections.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            color={activeSection === index ? "primary" : "default"}
          >
            <FiberManualRecordIcon />
          </IconButton>
        ))}
      </Box>
      <Box height="30px" />
      <Box
        mt={4}
        borderBottom="1px solid #000"
        width={{ xs: "100%", sm: "500px" }}
        height={2}
        mx="auto"
        mr={{ xs: "0", sm: "920px" }}
      />
    </Box>
  );
});

export default Products;
