import axios from "axios";

export function overWater(lat, lng) {
  return (dispatch) => {
    axios.get(`https://api.onwater.io/api/v1/results/${lat},${lng}`).then(response=>{
    dispatch({
      type: "OVER_WATER",
      overWater: response.data.water
    })
  }).catch(err=>{
    alert("error");
  })
}
}

export default function reducer(prevState="", action) {
  switch(action.type) {
    case "OVER_WATER":
      return action.overWater;
    default:
      return prevState;
  }
}
