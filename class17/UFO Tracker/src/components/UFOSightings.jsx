import Filter from "./Filter";
import UFOSightingsList from "./UFOSightingsList";
import { useState } from "react";

export default function UFOSightings(props) {
  const [filter, setFilter] = useState("");
  //   const [sightings, setSightings] = useState(props.sightings);

  const handleChange = (value) => {
    setFilter(value);
  };

  const filterSightings = () => {
    return props.sightings.filter((sighting) => sighting.date.includes(filter));
  };

  return (
    <>
      <Filter onFilterChange={handleChange} />
      <UFOSightingsList sightingsList={filterSightings()} />;
    </>
  );
}
