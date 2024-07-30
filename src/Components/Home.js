import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import yod from '../Assets/yod.png';
import Services from './Services';
import Products from './Products';
import Clients from './Clients';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from "@mui/material";

const Home = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const clientsRef = useRef(null);

  const SpacerBox = styled(Box)({
    height: '30px',
  });

  return (
    <>
      <Navbar homeRef={homeRef} servicesRef={servicesRef} productsRef={productsRef} clientsRef={clientsRef} />
      <MainContainer ref={homeRef}>
        <Container>
          <TextContainer>
            <Title>Every problem is an opportunity for a solution</Title>
            <Description>
              Awura is a tech company that is focused on finding tech solutions based on innovation and creativity.
            </Description>
            <SpacerBox />
            <Box mt={4} borderBottom="1px solid #000" width="500px" height={2} mr="100px" />
          </TextContainer>
          <ImageContainer>
            <StyledImage src={yod} alt="Tech solutions" />
          </ImageContainer>
        </Container>
        <Services ref={servicesRef} />
        <Products ref={productsRef} />
        <Clients ref={clientsRef} />
      </MainContainer>
      <Footer />
    </>
  );
};

// Keyframes for the animation
const comeUp = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  padding-top: 0px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  max-width: 60%;
  margin-right: 40px;
  margin-left: 100px;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  max-width: 70%;
`;

const StyledImage = styled.img`
  width: 650px;
  height: 500px;
  animation: ${comeUp} 1s ease-out;
`;

export default Home;
