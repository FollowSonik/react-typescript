import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";

export default configureStore({
  reducer: userReducer,
  middleware: [thunk]
});