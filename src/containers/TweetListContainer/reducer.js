import { FETCH_TWEETS } from './constants';

const initialState = { tweets: [] };

export default function(state = initialState, action){
  switch(action.type) {
    case FETCH_TWEETS:
      return action.payload;
    default:
      return state;
  }
}