import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

// eslint-disable-next-line
export default useSelector as TypedUseSelectorHook<RootState>;