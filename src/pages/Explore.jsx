import React from "react";
import {Link} from "react-router-dom"
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
const Explore = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className="flex items-center justify-center text-3xl py-4 font-medium text-sky-800">
          Travel Posts
        </h1>
        <Grid container spacing={4} padding={5}>
          
            <Card sx={{ minWidth: 425, maxWidth: 425 }} variant="outlined">
              <CardMedia sx={{ height: 200 }}  />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  alignItems={"center"}
                  textAlign={"center"}
                >
                </Typography>
                <Typography variant="body2" maxHeight={400}>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={``}>
                  Read More
                </Button>
              </CardActions>
            </Card>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Explore;
