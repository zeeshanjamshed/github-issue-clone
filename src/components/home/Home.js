import React from "react";
import Container from "@mui/material/Container";
import TopBar from "../topBar/TopBar";
import ListComponent from "../list/List";

const Home = () => {
  return (
    <Container>
      <TopBar />
      <ListComponent />
    </Container>
  );
};

export default Home;
