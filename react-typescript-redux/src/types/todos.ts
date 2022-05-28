export enum fetchUsers {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: fetchUsers.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
  type: fetchUsers.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface IFetchUsersErrorAction {
  type: fetchUsers.FETCH_USERS_ERROR;
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

export type UserAction = IFetchUsersAction | IFetchUsersErrorAction | IFetchUsersSuccessAction;