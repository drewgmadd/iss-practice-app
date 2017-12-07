import {combineReducers} from "redux";
import info  from "./isslocator";
import people from "./spacePeople";
import launches from "./spaceXLaunches";
import water from "./isslocator/overWater";
export default combineReducers({
  info,
  people,
  launches,
  water
})
