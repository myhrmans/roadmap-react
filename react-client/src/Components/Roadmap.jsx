import React from "react";
import Section from "./Section";

class Roadmap extends React.Component {
    myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    }
  render() {
    return (
        <div>
      <div class="shadow-page" style={shadowStyle} />
      <div className="section">
        <div className="container">
        {this.myCallback.Component}
        </div>
      </div>
      </div>
    );
  }
}
const shadowStyle = {
    display: 'none'
  };

export default Roadmap;
