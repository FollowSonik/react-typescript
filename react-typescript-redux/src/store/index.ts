import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import {rootReducer} from "./reducers";

// eslint-disable-next-line
export default configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});