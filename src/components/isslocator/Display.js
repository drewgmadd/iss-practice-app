import React from "react";

function Display(props) {
  return (
    <div className="display">
      <img className="image" src="https://static.pexels.com/photos/23793/rocket-launch-space-discovery.jpg" alt="ISS attachment"/>
      <p>The Iss is currently at</p>
      <p>Longitude: {props.longitude}</p>
      <p>Latitude: {props.latitude}</p>
    </div>
  )
}

export default Display;
