import React from "react";
import {Switch, Route} from "react-router-dom";

import SpacePeople from "./spacePeople/SpacePeople";
import IssLocator from "./isslocator/IssLocator";
import UpcomingLaunches from "./spaceXLaunches/UpcomingLaunches";
import Navbar from "./navbar/Navbar";
import "./app.css";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={SpacePeople}/>
        <Route path="/IssLocator" component={IssLocator}/>
        <Route path="/UpcomingLaunches" component={UpcomingLaunches}/>
      </Switch>
    </div>
  )
}

export default App;
