import React from "react";

import { NavLinks } from "../Content-and-Nav/NavLinks";
import Header from "./Header";
import NewItem from "../Content-and-Nav/NewItem";
function Home() {
  return (
    <>
      <Header />
      <div>
        <NavLinks />
        <NewItem />
      </div>
    </>
  );
}

export default Home;
