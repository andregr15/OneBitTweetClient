import { GET_FOLLOWERS } from './constants';

const initialState = { followers: [] };

export default function(state = initialState, action){
  switch(action.type){
    case GET_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}