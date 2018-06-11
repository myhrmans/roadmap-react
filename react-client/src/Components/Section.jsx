import React from "react";
import Project from "./Project";

class Section extends React.Component {
  render() {
    return (
      <div className="block-1 col-12">
        <div className="row" id="Mobile">
          <div className="col-md-12 ml-0">
            <div className="line" />
          </div>
          <div
            className="col-xl-3 ml-0"
            style={{
              height: "100%",
              paddingBottom: "100%",
              marginBottom: "-100%"
            }}
          >
            <div className="roadmap-title">
              <h3 className="featureTitle">{this.props.title}</h3>{this.props.description}
            </div>
          </div>
          <Project />
        </div>
      </div>
    );
  }
}

export default Section;
