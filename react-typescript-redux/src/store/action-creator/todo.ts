import axios from "axios";
import {Dispatch} from "redux";

import {TodoActionTypes, TodoAction} from "../../types/todo";

// eslint-disable-next-line
export function fetchTodos(page = 1, limit = 10) {
  return async function (dispatch: Dispatch<TodoAction>) {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODOS});

      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _page: page,
          _limit: limit
        }
      });

      setTimeout(() => {
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
      }, 2e3);
    } catch (e) {
      dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "Todo loading error."});

      console.error("PagChompError:", e);
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return {type: TodoActionTypes.SET_TODO_PAGE, payload: page};
}