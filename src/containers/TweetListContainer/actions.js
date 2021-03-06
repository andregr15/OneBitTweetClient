import API, { HEADER } from '../../api';
import { DELETE_TWEET, ADD_TWEET, TWEET_LIKE, TWEET_UNLIKE, UPDATE_TWEET, UPDATE_TWEET_LIST } from './constants';

export function deleteTweet(id){
  const request = API.delete(`/tweets/${id}`, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: DELETE_TWEET, payload: id }),
      error => window.Materialize.toast('Problem in delete Tweet', 4000, 'red')
    );
  };
};

export function createTweet(body){
  const request = API.post(
    '/tweets', 
    { body:body },
    { headers: HEADER}
  );

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: ADD_TWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in create Tweet', 4000, 'red')
    );
  };
}

export function tweetLike(id) {
  const request = API.post(`/tweets/${id}/like`, {body: {}}, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: TWEET_LIKE, payload: id }),
      error => window.Materialize.toast('Problem on unlike Tweet', 4000, 'red')
    );
  };
}

export function tweetUnlike(id) {
  const request = API.delete(`/tweets/${id}/like`, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: TWEET_UNLIKE, payload: id }),
      error => window.Materialize.toast('Problem on unlike Tweet', 4000, 'red')
    );
  };
}

export function retweet(body, tweet_original_id){
  const request = API.post(
    '/tweets', 
    { body: body, tweet_original_id: tweet_original_id },
    { headers: HEADER}
  );

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: ADD_TWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in retweet Tweet', 4000, 'red')
    );
  };
}

export function updateTweet(body, id){
  const request = API.put(
    `/tweets/${id}`, 
    { body: body },
    { headers: HEADER}
  );

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: UPDATE_TWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in update Tweet', 4000, 'red')
    );
  };
}

export function getTweets(timeline, page, id){
  const request = API.get(
    `/${timeline ? 'timeline?' : `tweets?user_id=${id}&`}page=${page}`,
    { headers: HEADER}
  );

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: UPDATE_TWEET_LIST, payload: resp.data }),
      error => window.Materialize.toast('Problem get more tweets', 4000, 'red')
    );
  };
}