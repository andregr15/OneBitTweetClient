import API, { HEADER } from '../../api';
import { FETCH_TWEETS } from '../TweetListContainer/constants';

export function getUserTweets(id) {
  const request = API.get(`/tweets?user_id=${id}`, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: FETCH_TWEETS, payload: resp.data }),
      error => window.Materialize.toast('Problem in get Timeline', 4000, 'red')
    );
  };
}