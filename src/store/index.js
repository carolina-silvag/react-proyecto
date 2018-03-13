import { createStore } from 'redux';
import { city } from './../reducers/city'

const initialState = {
  city: 'Buenos Aires,ar'
}

// VINCULAR PLUGIN REDUX DEVTOOLS CON NUESTRA APLICACIÓN
export const store = createStore(city, initialState, // () => {} es función pura
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());