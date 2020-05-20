import React from "react";
//Import Utility Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
//Import Route Components
import Home from "./Routes/Home/Home";
import Item from "./Routes/Item/Item";
import Cart from "./Routes/Cart/Cart";
//Import the BrowserRouter and Route from Third Party Module 
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/item" component={Item} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default App;
