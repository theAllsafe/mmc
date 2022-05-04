import { api } from "../../helper/instance";
import { GET_PRODUCT_LIST, SHOW_TOAST } from "../constant/types";

export const getproductList = () => {
  return async (dispatch) => {
    api
      .get(`admin/products/productlist`)
      .then((response) => {
        console.log(`🚀 - return - ProductList`, response);
        const { data } = response.data;
        dispatch({
          type: GET_PRODUCT_LIST,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: SHOW_TOAST, payload: error.message });
      });
  };
};
