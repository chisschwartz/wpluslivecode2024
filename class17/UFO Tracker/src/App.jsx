import { useState } from "react";
import Banner from "./components/Banner";
import UFOSightings from "./components/UFOSightings";

import "./App.css";

function App() {
  const DUMMY_DATA = [
    {
      id: 0,
      date: "1/23/2002",
      description: "Saw a flying saucer",
      location: "Illinois",
    },
    {
      id: 1,
      date: "4/23/2005",
      description: "Flying spaghetti monster",
      location: "Missouri",
    },
    {
      id: 2,
      date: "5/2/2006",
      description: "Big foot, but with wings",
      location: "Washington",
    },
    {
      id: 3,
      date: "2/6/2000",
      description: "Beam of light from the sky to a field",
      location: "Illinois",
    },
    {
      id: 4,
      date: "11/12/2003",
      description: "Michael Allen flying on a skateboard",
      location: "Missouri",
    },
  ];

  return (
    <>
      <Banner />
      <UFOSightings sightings={DUMMY_DATA} />
    </>
  );
}

export default App;
