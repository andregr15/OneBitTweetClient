import API, { HEADER } from '../../api';
import { UPDATE_USER_INFO } from '../UserInfoContainer/constants';
import { FETCH_TWEETS } from '../TweetListContainer/constants';

export function setUserInfo(user) {
  return ({ type: UPDATE_USER_INFO, payload: user });
}

export function getTimeline(id) {
  const request = API.get('/timeline', { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: FETCH_TWEETS, payload: resp.data }),
      error => window.Materialize.toast('Problem in get Timeline', 4000, 'red')
    );
  };
}