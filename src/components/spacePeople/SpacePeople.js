import React, {Component} from "react";

import List from "./List";
import "./spacePeople.css";

class SpacePeople extends Component{
  render() {
    return (
      <div className="spacePeople">
        <List/>
      </div>
    )
  }
}

export default SpacePeople;
