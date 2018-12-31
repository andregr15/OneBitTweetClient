import API, { HEADER } from '../../api';
import { SET_TWEETS, DELETE_TWEET } from './constants';

export function deleteTweet(id){
  const request = API.delete(`/tweets/${id}`, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: DELETE_TWEET, payload: id }),
      error => window.Materialize.toast('Problem in delete Tweet', 4000, 'red')
    );
  };
};