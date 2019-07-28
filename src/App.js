import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import data from "./data";
import SimpleCard from './components/Card'
import Grid from '@material-ui/core/Grid'


function App() {
  // const cardsData = data.map(data => (
  //   <Cards key={data.id} imgSrc={data.imageUrl} description={data.description} />
  // ));
 

  return (
    <div className="App">
      <Navbar className="nav" />
      <Grid container spacing={1} style = {{padding: 24}}>
            { data.map(data => (
                <Grid item xs={8} sm={4} lg={4} xl={3}>
                 <SimpleCard 
                 key={data.id} 
                 name = {data.weight} 
                 weight = {data.weight} 
                 image = {data.imageUrl} />
                </Grid>

                ))}
            </Grid>

    </div>
  );
}

export default App;
