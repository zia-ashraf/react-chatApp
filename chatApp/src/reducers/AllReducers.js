import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import CounterReducer from "./CounterReducer";
import LoginPageModalReducer from "./LoginPageModalReducer";

const allReducers = combineReducers({
  isLoggedin: LoginReducer,
  counter: CounterReducer,
  loginSignupModal: LoginPageModalReducer,
});

export default allReducers;
