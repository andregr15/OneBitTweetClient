import API, { HEADER } from '../../api.js';
import { UPDATE_USER_INFO } from '../UserInfoContainer/constants';
import { FETCH_TWEETS } from '../TweetListContainer/constants';

export function getUserInfo(id){
  const request = API.get(`/users/${id}`, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: UPDATE_USER_INFO, payload: resp.data }),
      error => window.Materialize.toast('Problem in get User Info', 4000, 'red')
    );
  };
}

export function getTweetList(id){
  const request = API.get(`/tweets?user_id=${id}`, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: FETCH_TWEETS, payload: resp.data }),
      error=> window.Materialize.toast('Problem in get Tweet List', 4000, 'red')
    );
  };
}