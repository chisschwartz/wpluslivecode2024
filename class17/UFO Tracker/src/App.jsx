import { useState } from "react";
import Banner from "./components/Banner";
import UFOSightingsList from "./components/UFOSightingsList";

import "./App.css";

function App() {
  return (
    <>
      <Banner />
      <UFOSightingsList />
    </>
  );
}

export default App;
