import LatesNews from "@/components/ui/LatestNews/LatesNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
         <LatesNews></LatesNews>
        </Grid>
        <Grid item xs={4}>
        <SideBar></SideBar>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
