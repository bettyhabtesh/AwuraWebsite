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
  Link,
  Divider,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
  const [selectedCategory, setSelectedCategory] = useState("");
  const careerOpeningsRef = useRef(null);

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleJoinTeamClick = () => {
    if (careerOpeningsRef.current) {
      careerOpeningsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredPositions = selectedCategory
    ? positions.filter((position) => position.category === selectedCategory)
    : positions;

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
            onClick={handleJoinTeamClick}
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
              color="#001833"
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
                    Continuous learning and professional development are key to
                    staying ahead in today’s fast-paced world. We offer various
                    training programs, workshops, and mentorship opportunities
                    to help you grow your skills and advance your career.
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
                      Upgrade Skills
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="p">
                    In a rapidly evolving industry, staying updated with the
                    latest skills is crucial. We provide resources and support
                    for upgrading your skills through certifications, online
                    courses, and hands-on projects. Be part of a team that
                    encourages and supports your learning journey.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Career Openings Section */}
      <Container sx={{ py: 5 }}>
        <Box
          mt={4}
          borderBottom="1px solid #000"
          width={{ xs: "90%", sm: "500px" }}
          height={2}
          mx="auto"
          sx={{ display: { xs: "none", sm: "block" } }}
        />
        <SpacerBox />
        <SpacerBox />
        <Box
          width={{ xs: "90%", md: "70%" }}
          mx="auto"
          textAlign="center"
          ref={careerOpeningsRef} // Set ref here
        >
          <Typography
            variant="h4"
            component="h2"
            color="#3254A1"
            sx={{ fontWeight: "bold" }}
            gutterBottom
          >
            Career Openings
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            We're always looking for creative, talented self-starters to join
            the AWURA family. Check out our open roles below and fill out an
            application.
          </Typography>
        </Box>
        <SpacerBox />
        <SpacerBox />
        <Grid
          container
          spacing={4}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              component="h3"
              color="#3254A1"
              ml={{ xs: 0, md: 8 }}
              sx={{
                fontWeight: "bold",
                textDecoration: "underline",
                textAlign: { xs: "center", md: "left" },
              }}
              gutterBottom
            >
              CATEGORIES
            </Typography>

            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                "HT & ADMIN",
                "ENGINEERING",
                "SUPPORT",
                "DESIGN",
                "DIGITAL MARKETING",
              ].map((category, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  sx={{
                    color: selectedCategory === category ? "#3254A1" : "#000",
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Divider
              orientation="vertical"
              sx={{
                height: "300px",
                borderColor: "#3254A1",
                borderRight: "4px solid #3254A1",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {filteredPositions.length > 0 ? (
              filteredPositions.map((position, index) => (
                <React.Fragment key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                      width: "100%",
                    }}
                  >
                    <Box sx={{ flex: 1, textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        component="h4"
                        color="#001833"
                        sx={{ fontWeight: "bold" }}
                      >
                        {position.title}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: "center" }}>
                      <Typography variant="body2" component="p">
                        Experience
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color="#001833"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "14px", md: "18px" },
                        }} // Adjust font size
                      >
                        {position.experience} Years
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: "center" }}>
                      <Typography variant="body2" component="p">
                        Deadline
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color="#001833"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "14px", md: "18px" },
                        }} // Adjust font size
                      >
                        {position.deadline}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Link
                        href={position.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                      >
                        <ArrowForwardIosIcon />
                      </Link>
                    </Box>
                  </Paper>
                  {index < filteredPositions.length - 1 && (
                    <Divider sx={{ my: 2 }} />
                  )}
                </React.Fragment>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No positions within this category
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Vacancy;
