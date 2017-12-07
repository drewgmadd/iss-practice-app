import axios from "axios";


export function getIssLocation() {
  return (dispatch) => {
    axios.get("http://api.open-notify.org/iss-now.json").then(response=>{
      dispatch({
        type: "GET_ISS_LOCATION",
        coordinates: response.data.iss_position
      })
    }).catch(err => {
      alert("error");
    })
  }
}




export default function reducer(prevState = [], action) {
  switch (action.type) {
    case "GET_ISS_LOCATION":
      return action.coordinates;
    default:
      return prevState;
  }
}
