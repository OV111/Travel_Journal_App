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
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + posts.length) % posts.length);
  };

  // useEffect(() => {
  //   setCurrent(0)
  // }, [posts.length]);

  return (
    <React.Fragment>
      <main className="text-center py-8 relative">
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

       
        <div className="relative flex justify-center items-center overflow-hidden  max-w-full mx-10">
          <div className="flex gap-6 transition-transform duration-500">
            {Array.from({ length: 3 }).map((_, idx) => {
              const postIndex = (current + idx) % posts.length;
              const post = posts[postIndex];

              return (
                <Card
                  key={post.id}
                  sx={{
                    minWidth: 300,
                    maxWidth: 450,
                    borderRadius: "2rem",
                    boxShadow: 2,
                  }}
                  variant="outlined"
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt="post image"
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      align="center"
                      sx={{ mb: 0.5 }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                      sx={{ mb: 1 }}
                    >
                      {post.location} •{" "}
                      {new Date(post.date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" maxHeight={400}>
                      {post.shortDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={Link}
                      to={`/explore/${post.id}`}
                    >
                      Read More
                    </Button>
                    {isAuthenticated && (
                      <Button size="small" onClick={() => addTrip(post)}>
                        Add to Journal
                      </Button>
                    )}
                  </CardActions>
                </Card>
              );
            })}
          </div>

          
        </div>
          <button
            className="absolute top-97 left-3 text-2xl cursor-pointer "
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="absolute top-97 right-3 text-2xl cursor-pointer"
            onClick={nextSlide}
          >
            ❯
          </button>
      </main>
    </React.Fragment>
  );
};

export default Home;
