import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';
// import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers';
import './styles.css';

const api_key = '26202365286731356aaa7f162d871b97';
// const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather'

// const data1 = {
//   temperature: 32,
//   weatherState: SUN,
//   humidity: 2,
//   wind: '10 m/s',
// }

// const data2 = {
//   temperature: 10,
//   weatherState: SNOW,
//   humidity: 98,
//   wind: '70 m/s',
// }

// const WeatherLocation = () => (
//   <div className="dataContainer">
//       <Location city = {'Santiago'}/>
//       <WeatherData data = {data}/>
//   </div>
// );

class WeatherLocation extends Component {
  constructor( {city}) {
    super();
    this.state = {
      city,
      data: null,
    }
    // console.log('Constructor');

  }

    // this.setState({
    //   data: data2,
    // })
    
  componentWillMount = () => {
    // console.log('ComponentWillMount');
    const {city} = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {
      // console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({data});
    })
  }

  // componentDidMount = () => {
  //   console.log('ComponentDidMount');
  // }

  // componentWillUpdate = () => {
  //   console.log('WillUpdate')
  // }
  
  // componentDidUpdate = () => {
  //   console.log('DidUpdate')
  // }

  render = () => {
    // console.log('Render');
    const { onWeatherLocationClick } = this.props;
    const {city, data} = this.state;
    const style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };
    return (
      <div className="dataContainer weatherLocation" onClick= {onWeatherLocationClick}>
       <Location city = {city}/>
       { data !== null ? <WeatherData data = {data}/> : <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    />
       }
   </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;