import axios from "axios";
import {Dispatch} from "redux";

import {UserTypeActions, UserAction} from "../../types/types";

// eslint-disable-next-line
export default function () {
  return async function (dispatch: Dispatch<UserAction>) {
    try {
      dispatch({type: UserTypeActions.FETCH_USERS});

      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      dispatch({type: UserTypeActions.FETCH_USERS_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({type: UserTypeActions.FETCH_USERS_ERROR, payload: "User loading error."});

      console.error("PagChompError:", e);
    }
  }
}