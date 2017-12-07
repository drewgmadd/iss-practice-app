import React, {Component} from "react";
import {connect} from "react-redux";

import {peopleInSpace} from "../../redux/spacePeople";

class List extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.peopleInSpace();
  }
  handleClick(e) {
    this.state.isClicked ? this.setState({
      isClicked: false
    }) :
    this.setState({
      isClicked: true
    })
  }
  render() {
    const spacePeople = this.props.people.map((person, i) =>
      <p className="person" key={person.name+i}>{person.name} #{i+1}</p>
    );
    const astronaut = <img className="astronaut" src="https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?h=350&auto=compress&cs=tinysrgb" alt="astronaut"/>
    return (<div>
      <div className="list">
        {this.state.isClicked ? spacePeople: astronaut}
      </div>
      <div className="question">
        <p>Who is currently at the ISS?</p>
        <button value={this.state.isClicked} className="button" onClick={this.handleClick}>Click Here</button>
      </div>
    </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {peopleInSpace})(List);
