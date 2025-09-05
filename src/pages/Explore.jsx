import React, { useContext, useState, lazy, Suspense,useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { AuthContext } from "../Context/AuthContext";
import LoaderSpinner from "../components/LoaderSpinner";
import useTripsStore from "../Context/useTripsStore";

const Notification = lazy(() => import("../components/Notification"))

const Aurora = lazy(() => {
  return import("../components/Aurora");
});

const Explore = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { posts, addTrip, fetchPosts } = useTripsStore();
  const [message, setMessage] = useState("");

   useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleAddTrip = (post) => {
    addTrip(post);
    setMessage(`The ${post.location} added to Journal!`);
  };

  return (
    <React.Fragment>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Aurora background behind everything */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<LoaderSpinner/>}>
            <Aurora
              colorStops={["#00C6FF", "#0072FF", "#3A29FF"]}
              blend={0.4}
              amplitude={1.01}
              speed={0.5}
            />
          </Suspense>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="flex items-center justify-center text-center text-gray-100 text-5xl md:text-6xl font-serif text-primary my-6">
            Travel Posts
          </h1>
          <p className="text-center text-2xl text-muted-foreground max-w-3xl mx-auto text-slate-200">
            Discover amazing travel destinations, hidden gems, and unforgettable
            experiences around the world.
          </p>
        </div>

        <Grid container spacing={4} padding={5} className="relative z-10">
          {posts.map((post) => (
            <Card
              key={post.id}
              sx={{
                minWidth: 425,
                maxWidth: 425,
                borderRadius: "1rem",
                boxShadow: 1,
                transition: "transform 0.3s, boxShadow 0.3s",
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
                  alignItems="center"
                  textAlign="center"
                  sx={{ mb: 0.5 }}
                >
                  {post.title.toUpperCase()}
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
                  sx={{ px: 2 }}
                  component={Link}
                  to={`/explore/${post.id}`}
                >
                  Read More
                </Button>

                {isAuthenticated && (
                  <Button
                    size="small"
                    sx={{ px: 2 }}
                    onClick={() => handleAddTrip(post)}
                  >
                    Add to Journal
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}

        </Grid>
      </div>

      <Notification message={message} onClose={() => setMessage("")} />
    </React.Fragment>
  );
};

export default Explore;