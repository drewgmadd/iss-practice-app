import axios from "axios"

export function getUpcomingLaunches() {
  return (dispatch) => {
    axios.get("https://api.spacexdata.com/v2/launches/upcoming").then(response =>{
      dispatch({
        type: "UPCOMING_LAUNCHES",
        launches: response.data
      })
    }).catch(err=>{
      alert("error");
    })
  }
}

export default function reducer(prevState=[], action) {
  switch (action.type) {
    case "UPCOMING_LAUNCHES":
      return action.launches;
    default:
      return prevState;
  }
}
