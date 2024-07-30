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
  justifyContent:'space-between',
  background: 'radial-gradient(circle, #4a90e2 0%, #0033cc 100%)',
  borderRadius: '120px',
  padding: '20px 30px',
  color: '#fff',
  maxWidth: '1100px',
  margin: '0 auto',
  '@media (max-width: 600px)': {
    padding: '10px 15px',
    textAlign: 'center',
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
  },
});

const Divider = styled('div')({
  height: '50px',
  width: '1px',
  backgroundColor: '#fff',
  '@media (max-width: 600px)': {
    height: '30px',
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

const Footer = () => {
  return (
    <Box>
      <SpacerBox />
      <GradientBox>
        <InfoBox>
          <LocationOnIcon style={{ fontSize: '30px', marginBottom: '10px' }} />
          <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Pay Us a Visit
          </Typography>
          <Typography variant="body2" style={{ fontSize: '0.875rem' }}>
            RIZQ House, Gabon St, Addis Ababa,
            around Dembel next to Merkeb building
          </Typography>
        </InfoBox>
        <Divider />
        <InfoBox>
          <PhoneIcon style={{ fontSize: '30px', marginBottom: '10px' }} />
          <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Give Us a Call
          </Typography>
          <Typography variant="body2" style={{ fontSize: '0.875rem' }}>
            +251-910-183-505 <br />
            +251-913-818-349
          </Typography>
        </InfoBox>
        <Divider />
        <InfoBox>
          <EmailIcon style={{ fontSize: '30px', marginBottom: '10px' }} />
          <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Send Us a Message
          </Typography>
          <Typography variant="body2" style={{ fontSize: '0.875rem' }}>
            info@awuraplc.org
          </Typography>
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
      <Box>
        <Typography variant="h4" style={{ fontWeight: 'bold', color: '#000', textAlign: 'left', marginRight:'500px' }}>
          Subscribe to our newsletter
        </Typography>
        <Typography variant="body2" style={{ color: '#000', textAlign: 'left' }}>
          Browse local restaurants and businesses for delivery by entering your address below.
        </Typography>
      </Box>
      <Box style={{ width: '100%' }}>
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
          style={{ marginLeft:'1100px' }}
        />
      </Box>
    </SubscribeBox>
  );
};

export default Footer;
