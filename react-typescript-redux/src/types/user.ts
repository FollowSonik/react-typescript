export enum UserTypeActions {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: UserTypeActions.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
  type: UserTypeActions.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface IFetchUsersErrorAction {
  type: UserTypeActions.FETCH_USERS_ERROR;
  payload: string;
}

export interface IUserAction {
  type: string;
  payload?: any;
}

export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export type UserAction =
  IFetchUsersAction |
  IFetchUsersErrorAction |
  IFetchUsersSuccessAction;