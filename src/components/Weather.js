import React from 'react'
import axios from 'axios'


const zip = 15206;
const country = 'us';
const API_KEY = "ee4801f6e44a2eb4ac67c221634950b1"




class Weather extends React.Component {
   state= {
       temp:null
   }

componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&appid=${API_KEY}&units=imperial`)
    .then(res => {
       const data = res.data;
       this.setState({temp:data.main.temp})
        })
};


render() {
return(<div> {this.state.temp}</div> )
}

}

export default Weather;