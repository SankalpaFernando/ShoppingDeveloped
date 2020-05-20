import React, { Fragment } from "react";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import ItemPanel from "./components/ItemPanel";
import FetchContextProvider from "../../Context/FetchContext";

import "./Home.css";

function Home() {
  return (
    <Fragment>
      <FetchContextProvider>
        <Header />
        <div className="panel">
          <FilterPanel />
          <ItemPanel />
        </div>
      </FetchContextProvider>
    </Fragment>
  );
}

export default Home;
