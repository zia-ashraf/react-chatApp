const initialState = {
  token: null,
  isLoggedIn: false,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        token: action.token,
        isLoggedIn: true,
      };
    case "AUTH":
      return false;
    default:
      return state;
  }
};

export default LoginReducer;
