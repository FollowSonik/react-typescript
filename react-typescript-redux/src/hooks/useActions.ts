import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import ActionCreators from "../store/action-creator";

export default function() {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
}