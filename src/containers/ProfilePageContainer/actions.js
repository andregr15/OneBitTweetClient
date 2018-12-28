import API, { HEADER } from '../../api.js';
import { UPDATE_USER_INFO } from '../UserInfoContainer/constants';

export function getUserInfo(id){
  const request = API.get(`/users/${id}`, { headers: HEADER });
  return(dispatch) => {
    request.then(
      resp => dispatch({ type: UPDATE_USER_INFO, payload: resp.data }),
      error => window.Materialize.toast('Problem in get User Info', 4000, 'red')
    );
  };
}