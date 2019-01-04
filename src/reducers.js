import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.js';
import CurrentUserReducer from './containers/Auth/reducer.js';
import ImagePreviewReducer from './containers/ProfileEditContainer/reducer.js';
import UserInfoReducer from './containers/UserInfoContainer/reducer.js';
import TweetListReducer from './containers/TweetListContainer/reducer.js';
import FollowersReducer from './containers/FollowersContainer/reducer.js';
import FollowingsReducer from './containers/FollowingsContainer/reducer.js';

const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer,
  image_preview: ImagePreviewReducer,
  user: UserInfoReducer,
  tweets: TweetListReducer,
  followers: FollowersReducer,
  followings: FollowingsReducer,
});

export default rootReducer;