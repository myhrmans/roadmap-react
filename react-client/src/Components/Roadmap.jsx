import React from "react";

class Roadmap extends React.Component {
  render(props) {
    return (
      <span>
        <div class="shadow-page" style={shadowStyle} />
        <div className="section">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </span>
    );
  }
}
const shadowStyle = {
  display: 'none'
};

export default Roadmap;
