export const authSuccess = (token) => {
  return {
    type: "AUTH_SUCCESS",
    token: token,
  };
};

export const increment = () => {
  return {
    type: "increment",
  };
};

export const closeLoginModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};
export const openLoginModal = () => {
  return {
    type: "OPEN_MODAL",
  };
};
