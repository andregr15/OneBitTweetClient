import API, { HEADER } from '../../api';
import { GET_FOLLOWERS } from './constants';


export function getFollowers(id) {
  const request = API.get(`/users/${id}/followers`, { headers: HEADER });

  return(dispatch) => {
    request.then(
      resp => dispatch({ type: GET_FOLLOWERS, payload: resp.data }),
      error => window.Materialize.toast('Problem in get followers', 4000, 'red')
    )
  }
}