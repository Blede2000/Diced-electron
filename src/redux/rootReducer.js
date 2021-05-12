import { combineReducers } from 'redux';
import characterReducer from './characters/charactersReducer';
import generalReducer from './general/generalReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  general: generalReducer,
});

export default rootReducer;
