import React, {Component} from "react";
import {connect} from "react-redux";

import{overWater} from "../../redux/isslocator/overWater";

class GuessForm extends Component{
  constructor(props){
    super(props);
    this.state={
      coordinates: {
        longitude: "",
        latitude: ""
      },
      overWater: false
    }
    this.handleWaterSubmit = this.handleWaterSubmit.bind(this);
  }

  handleWaterSubmit(e) {
    console.log(this.props.info.latitude)
    e.preventDefault();
    this.props.overWater(this.props.info.latitude, this.props.info.longitude);
    this.setState({
      overWater: this.props.water
    })
  }


  render() {
    return (
      <form className="guess-form" onSubmit={this.handleWaterSubmit}>
        <p>Is the Iss above land or water?</p>
        <select >
          <option>Land</option>
          <option>Water</option>
        </select>
        <button className="guess-button">Guess</button>
      </form>
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {overWater})(GuessForm);
