import { UPDATE_USER_INFO, USER_UNFOLLOW, USER_FOLLOW } from './constants';

const initialState = { user: { } };

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER_INFO:
      return action.payload;
    case USER_UNFOLLOW:
      return {
        ...state,
        followed: false
      }
    case USER_FOLLOW:
      return {
        ...state,
        followed: true
      }
    default:
      return state;
  }
}