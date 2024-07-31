/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import superhero from "../Assets/superhero.png";
import Navbar from "./Navbar";

const Vacancy = () => {
  const [vacancies, setVacancies] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
    portofolio: null,
    cv: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("/api/vacancies")
      .then((response) => response.json())
      .then((data) => setVacancies(data))
      .catch((error) => console.error("Error fetching vacancies:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.mobile) tempErrors.mobile = "Mobile number is required";
    if (!formValues.email) tempErrors.email = "Email is required";
    if (!formValues.portofolio) tempErrors.portofolio = "Portofolio is required";
    if (!formValues.cv) tempErrors.cv = "CV is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formValues);
    }
  };

  return (
    <>
      <Navbar />
      <VacancyContainer>
        <Sidebar>
          <SidebarTitle>Vacancy List</SidebarTitle>
          {vacancies.map((vacancy, index) => (
            <VacancyItem key={index}>
              {vacancy.title}
              {vacancy.subpositions && (
                <Subpositions>
                  {vacancy.subpositions.map((subposition, subIndex) => (
                    <SubpositionItem key={subIndex}>
                      {subposition}
                    </SubpositionItem>
                  ))}
                </Subpositions>
              )}
            </VacancyItem>
          ))}
        </Sidebar>
        <Content>
          <HeaderContainer>
            <Image src={superhero} alt="Superhero" />
            <TextContainer>
              <Title>
                WE ARE <strong>HIRING</strong>
              </Title>
              <Description>
                We're a growing tech company seeking talented professionals to
                join our dynamic team.
              </Description>
            </TextContainer>
          </HeaderContainer>
          <FormContainer>
            <FormTitle>Apply Here</FormTitle>
            <Form onSubmit={handleSubmit}>
              <StyledTextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formValues.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <StyledTextField
                label="Mobile"
                name="mobile"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formValues.mobile}
                onChange={handleChange}
                error={!!errors.mobile}
                helperText={errors.mobile}
              />
              <StyledTextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formValues.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <StyledTextField
                label="Portofolio"
                name="portofolio"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formValues.portofolio}
                onChange={handleChange}
                error={!!errors.portofolio}
                helperText={errors.portofolio}
              />
              <StyledTextField
                label="CV"
                name="cv"
                type="file"
                InputLabelProps={{ shrink: true }}
                fullWidth
                margin="normal"
                onChange={handleChange}
                error={!!errors.cv}
                helperText={errors.cv}
              />
              <ApplyButton type="submit" variant="contained">
                Apply
              </ApplyButton>
            </Form>
          </FormContainer>
        </Content>
      </VacancyContainer>
      
    </>
  );
};

const VacancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-left: 50px;
  }
`;

const Sidebar = styled.div`
  width: 60%;
  height: 150px;
  padding: 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;

  @media (min-width: 768px) {
    width: 250px;
    height: 200px;
    border-bottom: none;
    border-right: 1px solid #ddd;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const VacancyItem = styled.div`
  margin-bottom: 15px;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Subpositions = styled.div`
  margin-left: 15px;
  font-size: 1rem;
`;

const SubpositionItem = styled.div`
  margin-top: 5px;
`;

const Content = styled.div`
  flex: 1;
  padding: 30px 30px;

  @media (min-width: 768px) {
    padding: 30px 50px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1px;
  margin-top: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: -80px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 300px;
    margin-top: 0;
  }
`;

const TextContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FormContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
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
    width: 100%;
    border-radius: 25px;
    padding: 10px;
    font-size: 1rem;
    background: radial-gradient(circle, #4a90e2 50%, #0033cc 100%);
    color: white;

    @media (min-width: 768px) {
      width: 250px;
      font-size: 1.2rem;
      margin-left: 160px;
    }
  }
`;

export default Vacancy;
