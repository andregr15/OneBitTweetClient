import { UPDATE_CURRENT_USER } from './constants';

const initialState = { current_user: {} };

export default function(state = initialState, action) { 
  switch(action.type) {
    case UPDATE_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}