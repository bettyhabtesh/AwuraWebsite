import { createTheme } from "@mui/material";

const theme = createTheme({
 typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  images: {
    mixBlendMode: 'multiply' ,
    transparentBackground: {
      '& img': {
        background: 'transparent',
      },
    },
  },
  
});

export default theme;