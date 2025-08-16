import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

const Explore = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const {addTrip} = useContext(TripsContext)
  return (
    <React.Fragment>
      <div>
        <h1 className="flex items-center justify-center text-4xl py-5 font-medium text-[#003580]">
          Travel Posts
        </h1>
        <p className="text-gray-600 text-xl max-w-4xl mx-auto">
          Discover amazing travel destinations, hidden gems, and unforgettable
          experiences around the world.
        </p>
        <Grid container spacing={4} padding={5}>
          {postsObj.map((post) => (
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
                  to={``}
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
                    onClick={() => {addTrip(post)}}
                  >
                    Add to Journal
                  </Button>
                ) : null}
              </CardActions>
            </Card>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Explore;
