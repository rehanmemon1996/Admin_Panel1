import React from "react";
import { Card, CardHeader, CardActionArea, CardMedia, Typography, CardContent, } from "@mui/material";
import { makeStyles } from "@mui/material";

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300, // Set your desired max width
    margin: "auto", // Center the card horizontally
  },
  media: {
    height: 200, // Set your desired height for the video
  },
}));

export default function Videos() {
  const classes = useStyles(); // Use the styles hook to get the classes

  return (
    <Card className={classes.root} raised={true}>
      <CardHeader />

      <CardActionArea>
        <CardMedia component="video" className={classes.media} image={"https://youtu.be/TAnUmR0SKUk?si=iHyAhhPnH5Vy7uhX"} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Some Text
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
