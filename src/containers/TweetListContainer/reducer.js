import { FETCH_TWEETS, DELETE_TWEET, ADD_TWEET, TWEET_LIKE, TWEET_UNLIKE, UPDATE_TWEET } from './constants';

const initialState = { tweets: [] };

export default function(state = initialState, action){
  switch(action.type) {
    case FETCH_TWEETS:
      return action.payload;
    case DELETE_TWEET:
      return state.filter(tweet=> tweet.id !== action.payload)
    case ADD_TWEET:
      return [action.payload, ...state]
    case TWEET_LIKE:
      state.find(tweet => tweet.id === action.payload).liked = true
      return [...state]
    case TWEET_UNLIKE:
      state.find(tweet => tweet.id === action.payload).liked = false
      return [...state]
    case UPDATE_TWEET:
    state.find(tweet => tweet.id === action.payload.id).body = action.payload.body
      return [...state]
    default:
      return state;
  }
}