import axios from "axios";
import {Dispatch} from "redux";

import {UserTypeActions, UserAction} from "../../types/user";

// eslint-disable-next-line
export default function () {
  return async function (dispatch: Dispatch<UserAction>) {
    try {
      dispatch({type: UserTypeActions.FETCH_USERS});

      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      setTimeout(() => {
        dispatch({type: UserTypeActions.FETCH_USERS_SUCCESS, payload: response.data});
      }, 2e3);
    } catch (e) {
      dispatch({type: UserTypeActions.FETCH_USERS_ERROR, payload: "User loading error."});

      console.error("PagChompError:", e);
    }
  }
}