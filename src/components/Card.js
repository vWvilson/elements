import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import "./cards.css";

const useStyles = makeStyles({
  card: {
    minWidth: 200
  },
  media: {
    height: 240}
  // title: {
  //   fontSize: 24
  // }
});

export default function SimpleCard(props) {
   
  
  const classes = useStyles();
  return (
    <Card style={{ border: "solid 2px black" }} className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        image={props.image}
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="h5"
          component="h2"
        >
          <h3>{props.name}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

