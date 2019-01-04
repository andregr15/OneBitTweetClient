import API, { HEADER } from '../../api';
import { GET_FOLLOWINGS } from './constants';
import { USER_UNFOLLOW } from '../UserInfoContainer/constants';


export function getFollowings(id) {
  const request = API.get(`/users/${id}/following`, { headers: HEADER });

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: GET_FOLLOWINGS, payload: resp.data }),
      error => window.Materialize.toast('Problem in get followers', 4000, 'red')
    )
  }
}

export function unfollow(id) {
  const request = API.delete(`/users/${id}/follow`, { headers: HEADER });

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: USER_UNFOLLOW, payload: id }),
      error => window.Materialize.toast('Problem in unfollow user', 4000, 'red')
    )
  }
}