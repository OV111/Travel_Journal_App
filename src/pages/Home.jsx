import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import AirplaneWindow from "../assets/AirplaneWindow.png";
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

const travelQuotes = [
  {
    quote: "Travel is the only thing you buy that makes you richer",
    author: "Anonymous",
  },
  { quote: "Adventure awaits those who seek it", author: "Explorer's Wisdom" },
  { quote: "Collect moments, not things", author: "Travel Philosophy" },
  // {}
];

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
      <main className="text-center  relative">
        <div
          className="relative flex flex-col items-center justify-center h-[620px] bg-cover bg-center gap-0"
          style={{ backgroundImage: `url(${AirplaneWindow})` }}
        >
          <SplitText
            text="Welcome to Travel Journal"
            className="text-[5.5rem] font-bold mt-0 text-[#033e91] drop-shadow-md z-3"
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
          <p className="text-3xl mb-4 font-semibold text-[#033e91] drop-shadow-md max-w-4xl mx-auto">;
            Discover amazing travel experiences from fellow adventurers and
            inspire others with your travel stories
          </p>
          <button className="font-medium text-xl mt-3 mb-38 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-[#003580] transition-colors duration-300 ease-in-out">
            <Link to="/login">Start Your Adventure</Link>
          </button>
        </div>

        <div className="relative grid justify-center items-center overflow-hidden  max-w-full mx-10">
          <h1 className="text-[2.8rem] font-bold text-[#033e91] pt-8">
            Popular Destinations
          </h1>
          <p className="text-xl text-slate-600 text-muted-foreground max-w-4xl mx-auto pt-2 pb-8">
            Discover amazing places through the eyes of fellow travelers
          </p>
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
                    borderRadius: "20px",
                    boxShadow: 0,
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
          className="absolute top-236 left-3 text-3xl cursor-pointer "
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-236 right-3 text-3xl cursor-pointer"
          onClick={nextSlide}
        >
          ❯
        </button>

        <div>
          <h1 className="text-[2.7rem] font-bold  text-[#033e91] pt-10">Travel Inspirations</h1>
          <p className="text-[1.4rem] text-slate-600 text-muted-foreground max-w-4xl mx-auto pt-3 pb-5">
            Words that fuel Adventure
          </p>
          <div className="flex justify-center items-center text-center gap-10 py-4">
            {travelQuotes.map((quote) => (
              <Card
                key={quote.id}
                sx={{
                  height: 130,
                  width: 430,
                  borderRadius: "20px",
                  boxShadow: 0,
                  px: 2,
                }}
                variant="outlined"
              >
                <CardContent className="text-center px-10">
                  <Typography
                    gutterBottom
                    variant="h5"
                    align="center"
                    textAlign={"center"}
                    sx={{ mb: 0.5 }}
                  >
                    {quote.quote}
                  </Typography>
                  <Typography>{quote.author}</Typography>
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
