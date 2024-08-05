/** @format */

import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from "@mui/icons-material/Work";
import SecurityIcon from "@mui/icons-material/Security";
import SchoolIcon from "@mui/icons-material/School";
import UpdateIcon from "@mui/icons-material/Update";
import vacancy from "../Assets/vacancy.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const loadGapiScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
      resolve();
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.body.appendChild(script);
  });
};

const Vacancy = () => {
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [filteredPositions, setFilteredPositions] = useState(positions);
  const careerOpeningsRef = useRef(null);
  const categories = [
    "All",
    "HT & ADMIN",
    "ENGINEERING",
    "SUPPORT",
    "DESIGN",
    "DIGITAL MARKETING",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadGapiScript();
        console.log("Google API script loaded");
        window.gapi.load("client", initClient);
      } catch (error) {
        console.error("Error loading Google API script", error);
      }
    };

    const initClient = () => {
      window.gapi.client
        .init({
          apiKey: "AIzaSyDTcKL2Oat586mmCK6xHabJEO-VAu6m8m8",
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4",
          ],
        })
        .then(() => {
          console.log("Google Sheets API client initialized");
          return window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: "1lbmVA7_KZLo_tW81r1CX0h8tagT07urpIhkKdWoFfbA",
            range: "Sheet1!A1:E",
          });
        })
        .then((response) => {
          console.log("Data fetched from Google Sheets:", response);
          const data = response.result.values;
          const formattedData = data.slice(1).map((row) => ({
            title: row[0],
            experience: row[1],
            deadline: row[2],
            category: row[3],
            link: row[4],
          }));
          setPositions(formattedData);
        })
        .catch((error) => {
          console.error("Error fetching data from Google Sheets", error);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPositions(positions);
    } else {
      const filtered = positions.filter(
        (position) => position.category === selectedCategory
      );
      setFilteredPositions(filtered);
    }
  }, [selectedCategory, positions]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
    if (careerOpeningsRef.current) {
      careerOpeningsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [expanded, setExpanded] = useState(false);
  const handleAccordionChange = (position) => (event, isExpanded) => {
    setExpanded(isExpanded ? position : false);
  };

  const SpacerBox = styled(Box)({
    height: "30px",
  });

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          height: { xs: "300px", md: "400px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          p: 3,
          color: "white",
        }}
      >
        <img
          src={vacancy}
          alt="vacancy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 24, 51, 0.7)",
            zIndex: -1,
          }}
        />
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: "24px", md: "36px" } }}
        >
          JOIN US
        </Typography>
        <Box sx={{ width: { xs: "80%", md: "50%" }, textAlign: "center" }}>
          <Typography
            variant="h6"
            component="p"
            gutterBottom
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Are you passionate about making a difference? At our company, we are
            always looking for enthusiastic and talented individuals to join our
            dynamic team. We offer a collaborative and innovative environment
            where your ideas and contributions matter.
          </Typography>
        </Box>
        <Box mt={2} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2, backgroundColor: "#0FB4E8" }}
            onClick={() => handlePositionClick(null)}
          >
            Join the team
          </Button>
        </Box>
      </Box>

      {/* Benefits Section */}
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              component="h2"
              color="#00063F"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "24px", md: "36px" },
              }}
              gutterBottom
            >
              Why you Should Join Our Awesome Team
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              We want you to feel like home when you are working at AWURA & for
              that we have curated a great set of benefits for you. It all
              starts with a training!
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <WorkIcon fontSize="large" color="primary" sx={{ mr: 1 }} />
                    <Typography
                      variant="h6"
                      component="h3"
                      color="#001833"
                      sx={{ fontWeight: "bold" }}
                    >
                      Team work
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="p">
                    At our company, teamwork is at the heart of everything we
                    do. We believe in the power of collaboration and
                    communication, working together to achieve our goals and
                    drive innovation.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <SecurityIcon
                      fontSize="large"
                      color="primary"
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      color="#001833"
                      sx={{ fontWeight: "bold" }}
                    >
                      Secured Future
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="p">
                    We are committed to ensuring a secure and stable future for
                    all our employees. Our comprehensive benefits package
                    includes competitive salaries, health and wellness programs,
                    and retirement plans.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <SchoolIcon
                      fontSize="large"
                      color="primary"
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      color="#001833"
                      sx={{ fontWeight: "bold" }}
                    >
                      Learning Opportunity
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="p">
                    We foster a culture of continuous learning and professional
                    development. We provide ample opportunities for skill
                    enhancement, training programs, and career growth to help
                    you reach your full potential.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <UpdateIcon
                      fontSize="large"
                      color="primary"
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      color="#001833"
                      sx={{ fontWeight: "bold" }}
                    >
                      Timely update
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="p">
                    Staying informed and up-to-date is key to our success. We
                    prioritize regular updates and communication to keep
                    everyone aligned, ensuring that you have the latest
                    information and resources at your fingertips.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Career Openings Section */}
      <Container sx={{ py: 5 }}>
  <Box width={{ xs: "90%", md: "70%" }} mx="auto" textAlign="center" ref={careerOpeningsRef}>
    <Box mt={4} borderBottom="1px solid #000" width={{ xs: "90%", sm: "100%", md: "500px" }} height={2} mx={{ xs: 'auto', sm: 'auto', md: '150px' }} />
    <SpacerBox />
    <SpacerBox />
    <Typography variant="h4" component="h2" color="#3254A1" sx={{ fontWeight: "bold" }} gutterBottom>
      Career Openings
    </Typography>
    <Typography variant="body1" component="p" gutterBottom>
      We're always looking for creative, talented self-starters to join the AWURA family. Check out our open roles below and fill out an application.
    </Typography>
  </Box>
  <SpacerBox />
  <SpacerBox />
  <Grid container spacing={2}>
    <Grid item xs={12} sm={3}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" component="h3" color="#3254A1" gutterBottom>
          CATEGORIES
        </Typography>
        <List>
          {categories.map((category) => (
            <ListItem
              button
              key={category}
              onClick={() => handleCategoryClick(category)}
              sx={{ color: selectedCategory === category ? '#3254A1' : 'inherit' }}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={9}>
      {filteredPositions.length > 0 ? (
        <List>
          {filteredPositions.map((position, index) => (
            <Accordion key={index} expanded={expanded === position} onChange={handleAccordionChange(position)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#3254A1' }} />} aria-controls="panel1a-content" id="panel1a-header">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    width: '100%',
                    color: '#3254A1',
                  }}
                >
                  <Box sx={{ flex: 1, display: { xs: 'flex', sm: 'none' }, mb: 1 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 'bold',
                        color: '#00063F',
                        fontSize: '24px' 
                      }}
                    >
                      {position.title}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, display: { xs: 'none', sm: 'flex' }, mb: 1 }}>
                    <ListItemText
                      primary={
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 'bold',
                            color: '#00063F',
                            fontSize: '20px'
                          }}
                        >
                          {position.title}
                        </Typography>
                      }
                    />
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography component="span" sx={{ color: 'gray', fontSize: '10px', mr: 1 }}>
                      Experience:
                    </Typography>
                    <Typography component="span" sx={{ fontWeight: 'bold', color: '#00063F', fontSize: '20px' }}>
                      {position.experience} Years
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography component="span" sx={{ color: 'gray', fontSize: '10px', mr: 1 }}>
                      Deadline:
                    </Typography>
                    <Typography component="span" sx={{ fontWeight: 'bold', color: '#00063F' }}>
                      {position.deadline}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {expanded === position && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <iframe
                        src={position.link}
                        width="100%"
                        height="1000"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                      >
                        Loading…
                      </iframe>
                
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'gray' }}>
  <Typography variant="body1" component="p" gutterBottom>
    No positions with this category 
  </Typography>
</Box>
      )}
    </Grid>
  </Grid>
</Container>

      <SpacerBox />
      <Footer />
    </Box>
  );
};

export default Vacancy;
