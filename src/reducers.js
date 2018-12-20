import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer';

const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer
});

export default rootReducer;