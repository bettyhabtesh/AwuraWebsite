import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const GradientBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'radial-gradient(circle, #4a90e2 0%, #0033cc 100%)',
  borderRadius: '120px',
  padding: '20px 30px',
  color: '#fff',
  maxWidth: '1100px',
  margin: '0 auto',
  '@media (max-width: 600px)': {
    padding: '10px 15px',
    flexDirection: 'column',
  },
});

const InfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '180px',
  margin: '10px',
  '@media (max-width: 600px)': {
    maxWidth: '150px',
    margin: '5px',
  },
});

const Divider = styled('div')({
  height: '50px',
  width: '1px',
  backgroundColor: '#fff',
  '@media (max-width: 600px)': {
    height: '30px',
    margin: '10px 0',
  },
});

const SubscribeBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#4a90e2',
  padding: '20px',
  width: '100%',
  margin: '0 auto',
  height: 'auto',
  gap: '10px',
  '@media (max-width: 600px)': {
    padding: '10px',
    width: '100%',
  },
});

const SpacerBox = styled(Box)({
  height: '60px',
  '@media (max-width: 600px)': {
    height: '30px',
  },
});

const ResponsiveTypography = styled(Typography)({
  '@media (max-width: 600px)': {
    fontSize: '0.75em',
  },
});

const ResponsiveIcon = styled('div')({
  fontSize: '30px',
  marginBottom: '10px',
  '@media (max-width: 600px)': {
    fontSize: '15px',
    marginBottom: '5px',
  },
});

const Footer = () => {
  return (
    <Box>
      <SpacerBox />
      <GradientBox>
        <InfoBox>
          <ResponsiveIcon as={LocationOnIcon} />
          <ResponsiveTypography variant="h6" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Pay Us a Visit
          </ResponsiveTypography>
          <ResponsiveTypography variant="body2" style={{ fontSize: '0.875rem' }}>
            RIZQ House, Gabon St, Addis Ababa,
            around Dembel next to Merkeb building
          </ResponsiveTypography>
        </InfoBox>
        <Divider />
        <InfoBox>
          <ResponsiveIcon as={PhoneIcon} />
          <ResponsiveTypography variant="h6" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Give Us a Call
          </ResponsiveTypography>
          <ResponsiveTypography variant="body2" style={{ fontSize: '0.875rem' }}>
            +251-910-183-505 <br />
            +251-913-818-349
          </ResponsiveTypography>
        </InfoBox>
        <Divider />
        <InfoBox>
          <ResponsiveIcon as={EmailIcon} />
          <ResponsiveTypography variant="h6" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Send Us a Message
          </ResponsiveTypography>
          <ResponsiveTypography variant="body2" style={{ fontSize: '0.875rem' }}>
            info@awuraplc.org
          </ResponsiveTypography>
        </InfoBox>
      </GradientBox>
      <SpacerBox />
      <Subscribe />
    </Box>
  );
};

const Subscribe = () => {
  return (
    <SubscribeBox>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <ResponsiveTypography variant="h4" sx={{ fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>
          Subscribe to our newsletter
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2" sx={{ color: '#000', marginBottom: '20px' }}>
          Get your news from us by entering your address below.
        </ResponsiveTypography>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <TextField
          variant="outlined"
          placeholder="Enter your email address..."
          InputProps={{
            style: { borderRadius: '50px', backgroundColor: '#fff', color: '#000', width: '100%' },
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  style={{
                    background: 'radial-gradient(circle, #4a90e2 0%, #0033cc 100%)',
                    color: '#fff',
                    borderRadius: '50px',
                    height: '36px',
                    boxShadow: 'none',
                    textTransform: 'none',
                  }}
                >
                  Send
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </SubscribeBox>
  );
};

export default Footer;
