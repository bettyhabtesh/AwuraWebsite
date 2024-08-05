import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Navbar = ({ homeRef, servicesRef, productsRef, clientsRef }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionRef, linkName) => {
    setActiveLink(linkName);
    if (location.pathname === "/vacancy") {
      navigate("/", { state: { scrollTo: linkName } });
    } else {
      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setDrawerOpen(false);
  };

  const handleDrawerToggle = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle(false)}
    >
      <List>
        <ListItem button onClick={() => handleScrollToSection(homeRef, "Home")}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleScrollToSection(servicesRef, "Services")}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button onClick={() => handleScrollToSection(productsRef, "Products")}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button onClick={() => handleScrollToSection(clientsRef, "Clients")}>
          <ListItemText primary="Clients" />
        </ListItem>
        <ListItem button component={RouterLink} to="/vacancy" onClick={() => setActiveLink("Vacancy")}>
          <ListItemText primary="Vacancy" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "white",
        boxShadow: "none",
      }}
    >
      <ToolbarStyled>
        <Box display="flex" alignItems="center">
          <LogoBox onClick={() => handleScrollToSection(homeRef, "Home")}>
            <img src={logo} alt="Logo" />
          </LogoBox>
          {!isMobile && !isTablet && (
            <NavLinks>
              <StyledLink
                onClick={() => handleScrollToSection(homeRef, "Home")}
                className={activeLink === "Home" ? "active" : ""}
              >
                Home
              </StyledLink>
              <StyledLink
                onClick={() => handleScrollToSection(servicesRef, "Services")}
                className={activeLink === "Services" ? "active" : ""}
              >
                Services
              </StyledLink>
              <StyledLink
                onClick={() => handleScrollToSection(productsRef, "Products")}
                className={activeLink === "Products" ? "active" : ""}
              >
                Products
              </StyledLink>
              <StyledLink
                onClick={() => handleScrollToSection(clientsRef, "Clients")}
                className={activeLink === "Clients" ? "active" : ""}
              >
                Clients
              </StyledLink>
              <StyledNavLink
                to="/vacancy"
                onClick={() => setActiveLink("Vacancy")}
                className={activeLink === "Vacancy" ? "active" : ""}
              >
                Vacancy
              </StyledNavLink>
            </NavLinks>
          )}
        </Box>
        {(isMobile || isTablet) && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle(true)}
              sx={{ color: "#3254a1" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle(false)}>
              {drawerList}
            </Drawer>
          </>
        )}
      </ToolbarStyled>
    </AppBar>
  );
};

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const LogoBox = styled(Box)`
  cursor: pointer;

  img {
    height: 150px;
    margin-left: 150px;
  }

  @media (max-width: 768px) {
    img {
      height: 80px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 20px;
  margin-right: 250px;
  margin-top: 70px;
  margin-left: 20px;

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  color: #3254a1;
  text-decoration: none;
  margin: 0 15px;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #3254a1;
  text-decoration: none;
  margin: 0 15px;
  font-size: 20px;

  &:hover {
      text-decoration: underline;
  }
`;

export default Navbar;
