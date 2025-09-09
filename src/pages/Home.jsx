import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AirplaneWindow from "../assets/AirplaneWindow.png";

import useAuthStore from "../Context/useAuthStore";
import useTripsStore from "../Context/useTripsStore";

import SplitText from "../components/SplitText";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const travelQuotes = [
  {
    quote: "Travel is the only thing you buy that makes you richer",
    author: "Anonymous",
},
  { quote: "Adventure awaits those who seek it", author: "Explorer's Wisdom" },
  { quote: "Collect moments, not things", author: "Travel Philosophy" },
  {
    quote:
      "The world is a book, and those who do not travel read only one page",
    author: "Saint Augustine",
  },
  { quote: "Not all those who wander are lost", author: "J.R.R. Tolkien" },
  { quote: "Life is short and the world is wide", author: "Unknown" },
];

const handleAnimationComplete = () => {
  console.log("All letters have been animated!");
};

const Home = () => {
  const { auth } = useAuthStore();
  const addTrip = useTripsStore().addTrip;
  const posts = useTripsStore().posts;

  const fetchPosts = useTripsStore().fetchPosts;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (posts.length > 0) {
      setCurrent((prev) => (prev + 1) % posts.length);
    }
  };
  const prevSlide = () => {
    if (posts.length > 0) {
      setCurrent((prev) => (prev - 1 + posts.length) % posts.length);
    }
  };

  useEffect(() => {
    setCurrent(0);
  }, [posts.length]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <React.Fragment>
      <main className="text-center relative">
        <div
          className="relative flex flex-col items-center justify-center h-[620px] bg-cover bg-center gap-0"
          style={{ backgroundImage: `url(${AirplaneWindow})` }}
        >
          <SplitText
            text="Welcome to Travel Journal"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[6rem] font-bold mt-0 py-3 text-[#033e91] drop-shadow-md z-3"
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
          <p className="text-base  sm:text-2xl md:text-3xl lg:text-3xl mb-4 font-semibold text-[#033e91] drop-shadow-md max-w-4xl mx-auto">
            Discover amazing travel experiences from fellow adventurers and
            inspire others with your travel stories
          </p>
          <Link to={"/login"}>
            <button className="font-medium text-base sm:text-xl md:text-xl lg:text-2xl  mt-3 mb-38 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-[#003580] transition-colors duration-300 ease-in-out">
              Start Your Adventure
            </button>
          </Link>
        </div>

        <div className="relative grid justify-center items-center overflow-hidden  max-w-full mx-10 mt-3">
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-[2.7rem] font-bold text-[#033e91] pt-8">
            Popular Destinations
          </h1>
          <p className="text-[0.8rem] sm:text-sm md:text-2xl lg:text-[1.4rem] text-slate-600  max-w-4xl mx-auto pt-2 pb-8">
            Discover amazing places through the eyes of fellow travelers
          </p>

          {!posts || posts.length === 0 ? (
            <p className="text-lg text-center text-gray-500 pb-8">
              No posts available
            </p>
          ) : (
            <div className="flex sm:flex-row sm:gap-14  md:gap-6 lg:gap-6 w-full gap-6 transition-transform duration-500">
              {Array.from({ length: 3 }).map((_, idx) => {
                const postIndex = (current + idx) % posts.length;
                const post = posts[postIndex];
                return (
                  <Card
                    key={post.id}
                    sx={{
                      minWidth: { xs: 280, sm: 300, md: 350, lg: 430, xl: 570 },
                      maxWidth: { xs: 320, sm: 360, md: 400, lg: 550, xl: 650 },
                      // minWidth: 420,
                      // maxWidth: 500,
                      borderRadius: "20px",
                      boxShadow: 0,
                    }}
                    variant="outlined"
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={post.image}
                      alt={post.title}
                      sx={{ height: 230 }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        align="center"
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
                        {post.location} •{" "}
                        {new Date(post.date).toLocaleDateString()}
                      </Typography>
                      <Typography
                        variant="body2"
                        maxHeight={400}
                        px={6}
                        textAlign={"center"}
                      >
                        {post.shortDescription}
                      </Typography>
                    </CardContent>
                    <CardActions className="ml-6 gap-30">
                      <Button
                        size="small"
                        component={Link}
                        to={`/explore/${post.id}`}
                      >
                        Read More
                      </Button>
                      {auth && (
                        <Button size="small" onClick={() => addTrip(post)}>
                          Add to Journal
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        <button
          className="absolute top-240 left-3 text-3xl cursor-pointer "
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-240 right-3 text-3xl cursor-pointer"
          onClick={nextSlide}
        >
          ❯
        </button>

        <div className="mb-14 mt-3">
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-[2.7rem] font-bold text-[#033e91] pt-8 ">
            Travel Inspirations
          </h1>
          <p className="text-[1.4rem] text-slate-600 text-muted-foreground max-w-4xl mx-auto pt-3 pb-5">
            Inspiration to Fuel Your Travel Dreams and Adventures
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-8 lg:grid-cols-3 gap-3 py-4 justify-items-center">
            {travelQuotes.map((quote) => (
              <Card
                key={quote.id}
                sx={{
                  height: "auto",
                  minHeight: 50,
                  width: "100%",
                  // maxWidth: 430,
                  maxWidth: { xs: 280, sm: 300, md: 320, lg: 430, xl: 550 },
                  borderRadius: "20px",
                  boxShadow: 0,
                  px: 2,
                }}
                variant="outlined"
              >
                <CardContent className="text-center px-10">
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      mt: 2,
                      fontSize: "1.3rem",
                      letterSpacing: "0.5px",
                      color: "#1e293b",
                    }} // slate-800,}}>
                  >
                    {" "}
                    {quote.author}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="body1"
                    align="center"
                    textAlign={"center"}
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.75,
                      color: "#475569", // slate-600
                      fontStyle: "italic",
                      maxWidth: "38ch",
                      mx: "auto",
                    }}
                  >
                    {quote.quote}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;