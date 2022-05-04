import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cart from "./res/cart.svg";

import star from "./res/star.svg";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { getproductList } from "../../store/actions/ProductAction";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  purchases: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    paddingBottom: "15px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
}));

const Purchase = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getproductList());
  }, []);
  return (
    <>
      <div className={`mt-3 mx-auto ${classes.purchases}`}>
        <div className="grid grid-cols-8">
          <div className="col-span-2 py-3 flex justify-center">
            <img src={cart} alt="cart" className="lg:w-8" />
          </div>
          <div className="col-span-4 ">
            <p className="text-lg lg:text-base xl:text-xl py-3 text-center">
              Your Purchases
            </p>
          </div>
          <div className="col-span-2 py-3">
            <MoreVertIcon />
          </div>
        </div>
        {/* products */}
        {productList &&
          productList.map((product) => {
            return (
              <div key={product.id}>
                <p className="border-t border-slate-400 my-2"></p>
                <div className="grid grid-cols-6 mx-auto w-75">
                  <div className="h-16 col-span-2 mx-auto flex items-center">
                    <img
                      src={product.image}
                      alt="meat"
                      className="h-12 w-12 border border-green-400 rounded-full"
                    />
                  </div>
                  <div className="h-16 col-span-3 text-left mb-3">
                    <p className="text-lg text-bolder">{product.productName}</p>
                    <p className="text-slate-200" style={{ fontSize: "10px" }}>
                      from
                    </p>
                    <p className="text-sm lg:text-xs">{product.shopName}</p>
                    <p className="text-slate-200" style={{ fontSize: "12px" }}>
                      <i> {moment(product.createdAt).format("DD-MM-YYYY")}</i>
                    </p>
                  </div>
                  <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                    <img src={star} alt="start" />
                    <p className="text-slate-200" style={{ fontSize: "12px" }}>
                      3/5
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        {/* <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-16 col-span-2 mx-auto flex items-center">
              <img
                src={meat}
                alt="meat"
                className="h-12 w-12 border border-green-400 rounded-full"
              />
            </div>
            <div className="h-16 col-span-3 text-left mb-3">
              <p className="text-lg text-bolder">Meat</p>
              <p className="text-slate-200" style={{ fontSize: "10px" }}>
                from
              </p>
              <p className="text-sm lg:text-xs">Alladeen Meat Shop</p>
              <p className="text-slate-200" style={{ fontSize: "12px" }}>
                <i>2 days ago</i>
              </p>
            </div>
            <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
              <img src={star} alt="start" />
              <p className="text-slate-200" style={{ fontSize: "12px" }}>
                3/5
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto flex items-center">
              <img
                src={tshirt}
                alt="tshirt"
                className="h-12 w-12 border border-green-400 rounded-full"
              />
            </div>
            <div className="h-16 col-span-3 text-left mb-3">
              <p className="text-lg text-bolder">T-Shirt</p>
              <p className="text-slate-200" style={{ fontSize: "10px" }}>
                from
              </p>
              <p className="text-sm">V-Mart</p>
              <p className="text-slate-200" style={{ fontSize: "12px" }}>
                <i>2 days ago</i>
              </p>
            </div>
            <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
              <img src={star} alt="start" />
              <p className="text-slate-200" style={{ fontSize: "12px" }}>
                3/5
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto flex items-center">
              <img
                src={ring}
                alt="ring"
                className="h-12 w-12 border border-green-400 rounded-full"
              />
            </div>
            <div className="h-16 col-span-3 text-left mb-3">
              <p className="text-lg text-bolder">Ring</p>
              <p className="text-slate-200" style={{ fontSize: "10px" }}>
                from
              </p>
              <p className="text-sm">JK Jewellers</p>
              <p className="text-slate-200" style={{ fontSize: "12px" }}>
                <i>2 days ago</i>
              </p>
            </div>
            <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
              <img src={star} alt="start" />
              <p className="text-slate-200" style={{ fontSize: "12px" }}>
                3/5
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Purchase;
