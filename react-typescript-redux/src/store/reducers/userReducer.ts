import {IUserState, UserTypeActions, IUserAction} from "../../types/user";

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null
};

// eslint-disable-next-line
export default function(state = initialState, action: IUserAction): IUserState {
  switch(action.type) {
    case UserTypeActions.FETCH_USERS:
      return {loading: true, error: null, users: []};
    case UserTypeActions.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload};
    case UserTypeActions.FETCH_USERS_ERROR:
      return {loading: false, error: action.payload, users: []};
    default: return state;
  }
}