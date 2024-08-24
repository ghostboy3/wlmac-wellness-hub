import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { sizing } from '@mui/system';
import './App.css';

const Home = () => {
  return (
    <>
    <div id = "home">
      <Container id="header"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '100px 0px',
        maxWidth: '100%',
    }}>
        <Typography variant="h4" component="h1">Mackenzie's Wellness Hub</Typography>
        <Typography variant="p" component="p">We're so happy you're here :)</Typography>
      </Container>
      </div>
      <Container></Container>
    </>
  );
};

export default Home;
