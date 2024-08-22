import React from "react";
import UFOSightingItem from "./UFOSightingItem";

export default function UFOSightingsList() {
  return (
    <ul>
      <UFOSightingItem
        date="Oct 1, 1994"
        description="Flying Saucer"
        location="Denver, CO"
      />
      <UFOSightingItem
        date="July 4th, 2015"
        description="Floating Lights"
        location="Butte, MT"
      />
    </ul>
  );
}
