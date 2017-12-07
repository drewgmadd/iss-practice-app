import React, {Component} from "react";
import {connect} from "react-redux";
import {getIssLocation} from "../../redux/isslocator";

import Display from "./Display";
import GuessForm from "./GuessForm";

class Form extends Component{
constructor() {
  super();
  this.state = {
    coordinates: {
      longitude: 0,
      latitude: 0
    }
  }
  this.handleSubmit= this.handleSubmit.bind(this);
}
handleSubmit(e) {
  e.preventDefault();
  this.props.getIssLocation();
  console.log(this.props.info)
  this.setState({
    coordinates: {
      longitude: this.props.info.longitude,
      latitude: this.props.info.latitude
    }
  })
  console.log(this.state);
}

  render() {
    return (
      <div>
        <Display longitude={this.props.info.longitude} latitude={this.props.info.latitude}/>
        <form className="water-form" onSubmit={this.handleSubmit}>
          <p className="water-text">Where is the ISS?</p>
          <button className="water-button">Submit</button>
        
        </form>
        <GuessForm longitude={this.state.coordinates.longitude} latitude={this.state.coordinates.latitude}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, {getIssLocation})(Form);
