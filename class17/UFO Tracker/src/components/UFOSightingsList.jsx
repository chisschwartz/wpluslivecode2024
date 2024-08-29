import React from "react";
import UFOSightingItem from "./UFOSightingItem";

export default function UFOSightingsList(props) {
  return (
    <ul>
      {props.sightingsList.map((sighting) => (
        <UFOSightingItem
          key={sighting.id}
          date={sighting.date}
          description={sighting.description}
          location={sighting.location}
        />
      ))}
    </ul>
  );
}
