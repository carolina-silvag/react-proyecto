import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import './../WeatherLocation/WeatherData/styles.css'

const ForecastItem = ( {weekDay, hour, data}) => (
  <div className="dataContainer">
    <div className="city">{weekDay} - {hour}hr</div>
    <div className="weatherDataCont"><WeatherData data = {data}></WeatherData></div>
  </div>  
)

// class componentName extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

ForecastItem.propTypes = {
  weekDay : PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
  })
}

export default ForecastItem;