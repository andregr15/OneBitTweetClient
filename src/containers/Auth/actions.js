import API, { HEADER } from '../../api.js';
import { push } from 'react-router-redux';
import { UPDATE_CURRENT_USER, REMOVE_CURRENT_USER } from './constants';

export function getCurrentUser() {
  const request = API.get('/users/current', { headers: HEADER });

  return (dispatch) => {
    request.then (
      resp => dispatch({ type: UPDATE_CURRENT_USER, payload: resp.data }),
      error => console.log('LogOut')
    )
  };
}

export function logOut() {
  localStorage.removeItem('jwt');

  return (dispatch) => {
    dispatch({ type: REMOVE_CURRENT_USER });
    dispatch(push('/'));
  };
}