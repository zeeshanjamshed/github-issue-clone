import React from "react";
import Container from "@mui/material/Container";
import TopBar from "../topBar/TopBar";
import PaginationComponent from "../pagination/Pagination";
import ListComponent from "../list/List";

const Home = () => {
  return (
    <Container>
      <TopBar />
      <ListComponent />
      <PaginationComponent />
    </Container>
  );
};

export default Home;
