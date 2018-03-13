import { SET_CITY } from './../actions'

export const city = (state, action) => {
  switch (action.type) {
    case SET_CITY:
      return {...state, city: action.value} /* spread propagation ...state crea una copia sin modificar el original, dejando un registro de todos los states*/
    default:
      return state;
  }
}