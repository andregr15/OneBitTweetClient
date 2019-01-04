import { GET_FOLLOWINGS } from './constants';
import { USER_UNFOLLOW } from '../UserInfoContainer/constants';

const initialState = { followings: [] };

export default function(state = initialState, action){
  switch(action.type){
    case GET_FOLLOWINGS:
      return action.payload;
    case USER_UNFOLLOW:
      return state.filter(following => following.id !== action.payload)
    default:
      return state;
  }
}