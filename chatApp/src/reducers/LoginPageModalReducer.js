const LoginPageModalReducer = (state = false, action) => {
  if (action.type === "OPEN_MODAL") {
    return true;
  } else if (action.type === "CLOSE_MODAL") {
    return false;
  }
  return state;
};
export default LoginPageModalReducer;
