import API, { HEADER } from '../../api';
import { USER_UNFOLLOW, USER_FOLLOW } from './constants';

export function unfollow(id) {
  const request = API.delete(`/users/${id}/follow`, { headers: HEADER });

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: USER_UNFOLLOW, payload: id }),
      error => window.Materialize.toast('Problem in unfollow user', 4000, 'red')
    )
  }
}

export function follow(id) {
  const request = API.post(`/users/${id}/follow`, {}, { headers: HEADER });

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: USER_FOLLOW, payload: id }),
      error => window.Materialize.toast('Problem in follow user', 4000, 'red')
    )
  }
}