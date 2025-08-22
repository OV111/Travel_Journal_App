import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { AuthContext } from "../Context/AuthContext";
import { TripsContext } from "../Context/TripsContext";

import { postsObj } from "../data/posts";

import Notification from "../components/Notification";

const Explore = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const { posts, addTrip } = useContext(TripsContext);
  const [message, setMessage] = useState("");

  const handleAddTrip = (post) => {
    addTrip(post);
    setMessage(`The ${post.location} added to Journal!`);
  };
  return (
    <React.Fragment>
      <div>
        <h1 className="flex items-center justify-center text-center text-[#003580] text-5xl md:text-6xl font-serif text-primary my-6">
          Travel Posts
        </h1>
        <p className="text-center text-gray-600 text-2xl max-w-4xl mx-auto">
          Discover amazing travel destinations, hidden gems, and unforgettable
          experiences around the world.
        </p>
        <Grid container spacing={4} padding={5}>
          {posts.map((post) => (
            <Card
              sx={{
                minWidth: 425,
                maxWidth: 425,
                borderRadius: "1rem",
                boxShadow: 1,
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              variant="outlined"
            >
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt="post image"
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  alignItems={"center"}
                  textAlign={"center"}
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
                  {post.location} • {new Date(post.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" maxHeight={400}>
                  {post.shortDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                  }}
                  component={Link}
                  to={`/explore/${post.id}`}
                >
                  Read More
                </Button>

                {isAuthenticated ? (
                  <Button
                    size="small"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: 2,
                    }}
                    component={Link}
                    to={``}
                    onClick={() => {
                      handleAddTrip(post);
                    }}
                  >
                    Add to Journal
                  </Button>
                ) : null}
              </CardActions>
            </Card>
          ))}
        </Grid>
      </div>

      <Notification
        message={message}
        onClose={() => {
          setMessage("");
        }}
      ></Notification>

    </React.Fragment>
  );
};
export default Explore;
