import { IS_AUTHENTICATED } from "../constant/types";

export const setIsAuth = (flag) => {
  return (dispatch) => {
    dispatch({ type: IS_AUTHENTICATED, payload: flag });
  };
};
