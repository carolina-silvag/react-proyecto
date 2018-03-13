import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
// import { store } from './store';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br',
  'Roma,it',
  'London,uk'
];

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     city: null,
  //   }
  // }

  // ------------- Esto se fue a locationListContainer.js en carpeta containers
  // handleSelectionLocation = (city) => {
  //   this.setState({city});
  //   console.log(`handleSelectionLocation ${city}`);
  //   // const action = {
  //   //   type: 'setCity',
  //   //   value: city,
  //   // }
  //   // store.dispatch(setCity(city));
  //   this.props.setCity(city);    
  // }
  
  render() {
    // const { city } = this.state;  
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="App">
              <LocationListContainer cities = {cities}>
              </LocationListContainer>
                              {/* ----------------- Esto tb se va a locationListContainer.js
                              <LocationList
                                cities = { cities }
                                onSelectedLocation = {this.handleSelectionLocation}>
                              </LocationList> */}
            </Col>
            <Col xs={12} md={6} className="App">
              <Paper zDepth={4}>
                <div className="detail">
                {
                  <ForecastExtendedContainer>
                  </ForecastExtendedContainer>
                  // city === null ? null : <ForecastExtended city = {city}>
                  // </ForecastExtended>
                }                  
                </div>
              </Paper>              
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      // <MuiThemeProvider>
      //   <div className="App">
      //     <LocationList
      //       cities = { cities }
      //       onSelectedLocation = {this.
      //       handleSelectionLocation}>
      //     </LocationList>
      //   </div>
      // </MuiThemeProvider>
    );
  }
}

// App.PropTypes = {
//   setCity: PropTypes.func.isRequired,
// }

// ------------ Esta función nos deja trabajar con las acciones. Nos la llevamos a locationListContainer
// const mapDispatchToPropsActions = (dispatch) => ({
//   setCity: value => dispatch(setCity(value))
// });


export default App;
