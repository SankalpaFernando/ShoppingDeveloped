import React, { Fragment } from "react";
import "./Cart.css";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import CartTotal from "./components/CartTotal";
import TotalContextProvider from "../../Context/TotalContext";
function Cart() {
  return (
    <Fragment>
      <TotalContextProvider>
        <CartTotal />
        <div className="cart">
          <Product />
          <Checkout />
        </div>
      </TotalContextProvider>
    </Fragment>
  );
}

export default Cart;
