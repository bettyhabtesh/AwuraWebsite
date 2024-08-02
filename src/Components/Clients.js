import React, { forwardRef } from 'react';
import { Box } from "@mui/material";
import styled from 'styled-components';
import client1 from '../Assets/client1.png';
import client2 from '../Assets/client2.png';
import client3 from '../Assets/client3.png';
import client4 from '../Assets/client4.png';
import client5 from '../Assets/client5.png';
import client6 from '../Assets/client6.png';
import client7 from '../Assets/client7.jpg';
import client8 from '../Assets/client8.png';
import client9 from '../Assets/client9.png';
import client10 from '../Assets/client10.jpg';
import client11 from '../Assets/client11.png';
import client12 from '../Assets/client12.png';
import client13 from '../Assets/client13.png';
import client14 from '../Assets/client14.png';
import client15 from '../Assets/client15.jpg';
import client16 from '../Assets/client16.png';
import client17 from '../Assets/client17.jpg';  
import client18 from '../Assets/client18.png';
import client19 from '../Assets/client19.jpg';
import client20 from '../Assets/client20.jpg';
import client21 from '../Assets/client21.png';
import client22 from '../Assets/client22.jpg';

const Clients = forwardRef((props, ref) => {
  const clients = [
    { id: 1, name: 'Client 1', image: client1 },
    { id: 2, name: 'Client 2', image: client2 },
    { id: 3, name: 'Client 3', image: client3 },
    { id: 4, name: 'Client 4', image: client4 },
    { id: 5, name: 'Client 5', image: client5 },
    { id: 6, name: 'Client 6', image: client6 },
    { id: 7, name: 'Client 7', image: client7 },
    { id: 8, name: 'Client 8', image: client8 },
    { id: 9, name: 'Client 9', image: client9 },
    { id: 10, name: 'Client 10', image: client10 },
    { id: 11, name: 'Client 11', image: client11 },
    { id: 12, name: 'Client 12', image: client12 },
    { id: 13, name: 'Client 13', image: client13 },
    { id: 14, name: 'Client 14', image: client14 },
    { id: 15, name: 'Client 15', image: client15 },
    { id: 16, name: 'Client 16', image: client16 },
    { id: 17, name: 'Client 17', image: client17 },
    { id: 18, name: 'Client 18', image: client18 },
    { id: 19, name: 'Client 19', image: client19 },
    { id: 20, name: 'Client 20', image: client20 },
    { id: 21, name: 'Client 21', image: client21 },
    { id: 22, name: 'Client 22', image: client22 },
  ];

  const duplicatedClients = [...clients, ...clients];

  const SpacerBox = styled(Box)({
    height: '30px',
  });

  return (
    <>
      <ClientsSection ref={ref}>
        <Title>Clients</Title>
        <Description>
          We are proud to serve a wide range of clients across multiple industries. Our customer base includes leading enterprises, dynamic small businesses, and innovative start-ups. We are committed to delivering tailored solutions that exceed the expectations of every client we work with.
        </Description>
        <Carousel>
          <Track>
            {duplicatedClients.map((client, index) => (
              <ClientItem key={index}>
                <ClientCircle>
                  <ClientImage src={client.image} alt={client.name} />
                </ClientCircle>
              </ClientItem>
            ))}
          </Track>
        </Carousel>
      </ClientsSection>
      <SpacerBox />
    </>
  );
});

const ClientsSection = styled.section`
  text-align: center;
  padding: 5px 20px;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem; /* 40px */
  font-weight: lighter;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 1.75rem; /* 28px */
  }
`;

const Description = styled.p`
  font-size: 1rem; /* 16px */
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
    font-size: 0.875rem; /* 14px */
  }
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 150px;
  @media (max-width: 600px) {
    width: 100%;
    height: 120px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    top: 0;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
  }
`;

const Track = styled.div`
  display: flex;
  animation: scroll 100s linear infinite;

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const ClientItem = styled.div`
  min-width: 168px; 
  margin: 0 20px;
  @media (max-width: 600px) {
    min-width: 120px;
    margin: 0 10px;
  }
`;

const ClientCircle = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const ClientImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export default Clients;
