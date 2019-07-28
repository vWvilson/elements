import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card 
    style={{ border:'solid 2px black'}}
    className={classes.card}>
    <CardMedia
    image={props.image}
    style = {{ height: 0, paddingTop: '56%'}}
    />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h3>{props.name}</h3>
        </Typography>
       
        
        </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}