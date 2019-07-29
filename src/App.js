import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import data from "./data";
import SimpleCard from "./components/Card";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const zip = 15206;
const country = "us";
const API_KEY = "ee4801f6e44a2eb4ac67c221634950b1";

class App extends React.Component {
  state = {
    temp: null
  };

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&appid=${API_KEY}&units=imperial`
      )
      .then(res => {
        const data = res.data;
        this.setState({ temp: data.main.temp });
      });
  }

  render() {
    const temp = this.state.temp;
    const currentTemp = Math.round(temp);
    return (
      <div className="App">
        <Navbar className="nav" temp={currentTemp} />
        <Grid container spacing={1} style={{ padding: 24 }}>
          {data.map(data => (
            <Grid item xs={8} sm={4} lg={4} xl={3}>
              <SimpleCard
                key={data.id}
                name={data.weight}
                weight={data.weight}
                image={data.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
