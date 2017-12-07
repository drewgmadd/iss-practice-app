import axios from "axios";

export function peopleInSpace() {
  return (dispatch) => {
    axios.get("http://api.open-notify.org/astros.json").then(response => {
      dispatch({
        type: "PEOPLE_IN_SPACE",
        people: response.data.people
      })
    }).catch(err => {
      alert("error");
    })
  }
}

export default function reducer(prevState=[], action) {
  switch (action.type) {
    case "PEOPLE_IN_SPACE":
      return action.people;
    default:
      return prevState;
  }
}
