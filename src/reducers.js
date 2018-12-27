import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer';
import CurrentUserReducer from './containers/Auth/reducer.js';

const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer
});

export default rootReducer;