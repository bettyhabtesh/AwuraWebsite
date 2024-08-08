import React, { useState } from "react";
import { Box, Grid, Typography, Button, styled, useMediaQuery } from "@mui/material";
import {
  FaCode,
  FaCogs,
  FaNetworkWired,
  FaProductHunt,
  FaUsers,
  FaTools,
} from "react-icons/fa";

const Services = React.forwardRef((props, ref) => {
  const [showAll, setShowAll] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const servicesData = [
    { title: "Software Product Development", icon: <FaCode /> },
    { title: "ERP Systems", icon: <FaCogs /> },
    { title: "Intelligent Infrastructure Solution", icon: <FaNetworkWired /> },
    { title: "In-House Products", icon: <FaProductHunt /> },
    { title: "Technology Consultancy", icon: <FaUsers /> },
    { title: "Support and Troubleshooting", icon: <FaTools /> },
  ];

  const SpacerBox = styled(Box)({
    height: '30px',
  });

  const visibleServices = isSmallScreen && !showAll ? servicesData.slice(0, 3) : servicesData;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <Box ref={ref} mt={4} textAlign="center">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: { xs: '30px', sm: '35px', md: '40px' } }}
      >
        Services
      </Typography>
      <Typography
        variant="body1"
        mb={4}
        sx={{
          mx: "auto",
          maxWidth: "800px",
          fontSize: { xs: '14px', sm: '16px' },
        }}
      >
        Our company helps clients grow and succeed through a range of services
        including custom software development, ERP systems, intelligent
        infrastructure solution, technology consultancy, in-house solutions, and
        testing.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {visibleServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              sx={{
                background: "radial-gradient(circle, rgb(74, 144, 226), rgb(0 110 204))",
                color: "common.white",
                borderRadius: 3,
                height: "150px",
                width: "100%",
                maxWidth: '400px',
                margin: "0 auto",
                fontSize: { xs: '14px', sm: '16px' }
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                {React.cloneElement(service.icon, { style: { fontSize: "30px" } })}
                <Typography variant="h6" sx={{ fontSize: { xs: '16px', sm: '18px' } }}>
                  {service.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {isSmallScreen && (
        <Button variant="contained" color="primary" onClick={handleToggle} sx={{ mt: 2 }}>
          {showAll ? "See Less" : "See More"}
        </Button>
      )}
      <SpacerBox />
      <Box
        mt={4}
        borderBottom="1px solid #000"
        width={{ xs: "90%", sm: "500px" }}
        height={2}
        ml='auto'
        mr={{ xs: "18px", sm: "920px" }}
      />
      <SpacerBox />
    </Box>
  );
});

export default Services;
