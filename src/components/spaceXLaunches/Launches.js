import React, {Component} from "react";

class Launches extends Component{
  render() {
    return (
      <div className="launch-container">
        <h1>{this.props.launches}</h1>
      </div>
    )
  }
}

export default Launches;
