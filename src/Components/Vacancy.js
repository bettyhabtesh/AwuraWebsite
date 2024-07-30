
import React from 'react';
import styled from 'styled-components';
import { Button, TextField } from "@mui/material";
import superhero from '../Assets/superhero.png'; 
import Navbar from './Navbar';

const Vacancy = () => {
  return (
    <>
    <Navbar />
    <VacancyContainer>
      <HeaderContainer>
        <Image src={superhero} alt="Superhero" />
        <TextContainer>
          <Title>WE ARE <strong>HIRING</strong></Title>
          <Description>
            We're a growing tech company seeking talented professionals to join our dynamic team.
          </Description>
          <Positions>
            Open positions include:
            <ul>
              <li>UI Designer</li>
              <li>Full-Stack Developer</li>
              <li>Graphic Designer</li>
              <li>Content Creator</li>
            </ul>
          </Positions>
        </TextContainer>
      </HeaderContainer>
      <FormContainer>
        <FormTitle>Apply Here</FormTitle>
        <Form>
          <StyledTextField label="Name" variant="outlined" fullWidth margin="normal" />
          <StyledTextField label="Mobile" variant="outlined" fullWidth margin="normal" />
          <StyledTextField label="Email" variant="outlined" fullWidth margin="normal" />
          <StyledTextField label="CV" type="file" InputLabelProps={{ shrink: true }} fullWidth margin="normal" />
          <ApplyButton variant="contained">Apply</ApplyButton>
        </Form>
      </FormContainer>
    </VacancyContainer>
    </>
  );
};

const VacancyContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: white;
  padding-left: 250px;
  padding-right: 250px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const TextContainer = styled.div`
  margin-left: 20px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Positions = styled.div`
  font-size: 1rem;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 10px;
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 25px;
  }
`;

const ApplyButton = styled(Button)`
  && {
margin-left: 160px;
  width: 250px;
    border-radius: 25px;
    padding: 10px;
    font-size: 1.2rem;
    background: 'radial-gradient(circle, #4a90e2 50%, #0033cc 50%)';
  }
`;

export default Vacancy;
