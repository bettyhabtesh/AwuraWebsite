import React, { useState } from "react";
import { AppBar, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import styled from "styled-components";
import logo from "../Assets/logo.svg";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = ({ homeRef, servicesRef, productsRef, clientsRef }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (sectionRef, linkName) => {
    navigate("/");
    setActiveLink(linkName);
    setTimeout(() => {
      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
    setDrawerOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    setActiveLink("Home");
    setTimeout(() => {
      if (homeRef?.current) {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
    setDrawerOpen(false);
  };

  const handleLogoClick = () => {
    handleHomeClick();
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        style={{
          backgroundColor: "white",
          boxShadow: "none",
          position: "sticky",
       
          width: "100%",
        }}
      >
        <NavbarContainer>
          <LogoBox onClick={handleLogoClick}>
            <img src={logo} alt="Logo" />
          </LogoBox>
          <NavLinks>
            <StyledLink
              onClick={handleHomeClick}
              className={activeLink === "Home" ? "active" : ""}
            >
              Home
            </StyledLink>
            <StyledLink
              onClick={() => handleNavClick(servicesRef, "Services")}
              className={activeLink === "Services" ? "active" : ""}
            >
              Services
            </StyledLink>
            <StyledLink
              onClick={() => handleNavClick(productsRef, "Products")}
              className={activeLink === "Products" ? "active" : ""}
            >
              Products
            </StyledLink>
            <StyledLink
              onClick={() => handleNavClick(clientsRef, "Clients")}
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
        </NavbarContainer>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerList>
          <List>
            <ListItem button onClick={handleHomeClick}>
              <ListItemText primary="Home" className={activeLink === "Home" ? "active" : ""} />
            </ListItem>
            <ListItem button onClick={() => handleNavClick(servicesRef, "Services")}>
              <ListItemText primary="Services" className={activeLink === "Services" ? "active" : ""} />
            </ListItem>
            <ListItem button onClick={() => handleNavClick(productsRef, "Products")}>
              <ListItemText primary="Products" className={activeLink === "Products" ? "active" : ""} />
            </ListItem>
            <ListItem button onClick={() => handleNavClick(clientsRef, "Clients")}>
              <ListItemText primary="Clients" className={activeLink === "Clients" ? "active" : ""} />
            </ListItem>
            <ListItem button onClick={() => setActiveLink("Vacancy")}>
              <ListItemText primary="Vacancy" className={activeLink === "Vacancy" ? "active" : ""} />
            </ListItem>
          </List>
        </DrawerList>
      </Drawer>
    </>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media (max-width: 600px) {
    padding: 0 5px;
  }
`;

const LogoBox = styled(Box)`
  cursor: pointer;

  img {
    height: 170px;
    margin-left: 250px;

    @media (max-width: 600px) {
      height: 120px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
 
  margin-right: 250px;
  margin-top: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const DrawerList = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  .active {
    color: black;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #3254a1;
  text-decoration: none;
  margin: 0 15px;
  font-size: 20px;

  &.active {
    color: black;
    text-transform: uppercase;
    font-weight: bold;
  }

  &:hover {
    color: black;
  }
`;

const StyledLink = styled.div`
  color: #3254a1;
  text-decoration: none;
  margin: 0 15px;
  font-size: 20px;
  cursor: pointer;

  &.active {
    color: black;
    text-transform: uppercase;
    font-weight: bold;
  }

  &:hover {
    color: black;
  }
`;


export default Navbar;
