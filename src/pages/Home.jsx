import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { TripsContext } from "../Context/TripsContext";
import SplitText from "../components/SplitText";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const handleAnimationComplete = () => {
  console.log("All letters have been animated!");
};

const Home = () => {
  const { isAuthenticated, addTrip } = useContext(AuthContext);
  const { posts } = useContext(TripsContext);

  // const nextSlide = () => {};

  // const prevSlide = () => {};

  useEffect(() => {}, [posts.length]);

  return (
    <React.Fragment>
      <main className="container mx-full px-4 py-8">
        <div className="text-center mb-12">
          <SplitText
            text="Welcome to Travel Journal!"
            className="text-5xl font-semibold mb-4"
            delay={100}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing travel experiences from fellow adventurers and
            share your own journey with the world!
          </p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
