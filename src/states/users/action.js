import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ email, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await api.register({ email, name, password });
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
