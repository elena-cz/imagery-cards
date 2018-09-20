import { combineReducers } from 'redux';
import current from './current-reducer';
import cards from './cards-reducer';
import categories from './categories-reducer';
import favorites from './favorites-reducer';
import customSets from './customSets-reducer';

const rootReducer = combineReducers({
  current,
  cards,
  categories,
  favorites,
  customSets,
});

export default rootReducer;
