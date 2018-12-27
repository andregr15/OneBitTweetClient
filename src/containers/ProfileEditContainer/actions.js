import API, { HEADER } from '../../api.js';

export function updateUserInfo({id, name, email, description, photo}) {
  const params = {'user': {name, email, description, photo}};
  const request = API.put(`/users/${id}`, params, {headers: HEADER});

  return(dispatch) => {
    request.then(
      resp => window.Materialize.toast('User updated with success', 4000, 'green'),
      error => window.Materialize.toast('Problem in user update', 4000, 'red')
    );
  };
}

export function updateUserPassword({id, password, password_confirmation}) {
  const params = {'user': {password, password_confirmation}};
  const request = API.put(`/users/${id}`, params, {headers: HEADER});

  return(dispatch) => {
    request.then(
      resp => window.Materialize.toast('Password updated with success', 4000, 'green'),
      error => window.Materialize.toast('Problem in password update.', 4000, 'red')
    );
  };
}