import API from '../../api';
import { push } from 'react-router-redux';
import { FETCH_TWEETS } from '../TweetListContainer/constants';
import { GET_FOLLOWERS } from '../FollowersContainer/constants';

export function search(query){
  const request = API.get(`/search?query=${query.search}`);

  return(dispatch) => (
    request.then(
      resp => {
        dispatch(push('/search'))
        dispatch({ type: FETCH_TWEETS, payload: resp.data.tweets })
        dispatch({ type: GET_FOLLOWERS, payload: resp.data.users })
      },
      error => window.Materialize.toast('Problem in perform the search', 4000, 'red')
    )
  );
}