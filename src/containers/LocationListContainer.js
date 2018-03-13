// componente inteligente que hará todas las conexiones

import React, { Component } from 'react';
import { connect } from 'react-redux'; // es para conectar con los estados
import { setCity } from './../actions';
import LocationList from './../components/locationList'

class LocationListContainer extends Component {

  handleSelectionLocation = (city) => {
    // this.setState({city});
    this.props.setCity(city);    
  }
  
  render() {
    return (
      <div>
        <LocationList cities = { this.props.cities } 
          onSelectedLocation = {this.handleSelectionLocation}>
        </LocationList>        
      </div>
    );
  }
}

//Esta función nos deja trabajar con las acciones. 
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

// connect es método que recibe dos funciones, y las agrega a App, si hay un cambio de estado
// y se lo pasa a APP

// const AppConnected = connect(null, mapDispatchToPropsActions)(App);
// export default AppConnected; =====>

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);