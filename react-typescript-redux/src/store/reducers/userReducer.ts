import {IUserState, fetchUsers, IUserAction} from "../../types/todos";

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null
};

export default function(state = initialState, action: IUserAction): IUserState {
  switch(action.type) {
    case fetchUsers.FETCH_USERS:
      return {loading: true, error: null, users: []};
    case fetchUsers.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload};
    case fetchUsers.FETCH_USERS_ERROR:
      return {loading: false, error: action.payload, users: []};
    default: return state;
  }
}