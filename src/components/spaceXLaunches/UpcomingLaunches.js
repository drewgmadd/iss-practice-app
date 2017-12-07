import React, {Component} from "react";
import {connect} from "react-redux";

import "./upcomingLaunches.css";
import Launches from "./Launches";
import {getUpcomingLaunches} from "../../redux/spaceXLaunches";

class UpcomingLaunches extends Component{
  constructor() {
    super();
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getUpcomingLaunches();
  }
  handleClick(e) {
    this.state.isClicked ? this.setState({
      isClicked: false
    }):
    this.setState({
      isClicked: true
    })
  }
  render() {
    const launches =  this.state.isClicked ? this.props.launches.map((launch, i)=>
      <div className="upcomingLaunches">
        <p className="launch-info">Rocket: {launch.rocket.rocket_id} |</p>
        <p className="launch-info">Flight Number: {launch.flight_number} |</p>
        <p className="launch-info">Payload Type: {launch.rocket.second_stage.payloads[0].payload_type}</p>
        <p className="launch-info">Date: {launch.launch_date_local}</p>
        <p className="launch-info">Launch Site: {launch.launch_site.site_name_long}</p>
      </div>
    ):
    <div>
      <img className="rocket" src="https://images.pexels.com/photos/23795/rocket-launch-space-discovery.jpg?w=940&h=650&auto=compress&cs=tinysrgb" alt="rocket launch"/>
    </div>
    return (
      <div>
        <Launches launches={launches}/>
        <button className="launch button" value={this.state.isClicked} onClick={this.handleClick}>Show Upcoming Launches</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {getUpcomingLaunches})(UpcomingLaunches);
