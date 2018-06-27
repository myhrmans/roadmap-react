import React from "react";
class Project extends React.Component {
  render() {
    let progressNew = this.props.progress;
    let borderRad = "5px";
    var svg = this.props.svg;
    if (progressNew >= 100) {
      progressNew = 100;
      borderRad = "0px";
    } else if (progressNew < 0) {
      progressNew = 0;
    }
    var image;
    if (svg != null && svg != "") {
      image = <img class="svg" src={this.props.svg} />
    } else {
      image = null;
    }
    return (
      <div className="col-lg-4 block col-xl-3">
        <div className="roadmap-block roadmap-block-shadow">
          <h2 className="cardTitle">{this.props.title}</h2>
          <div className="svg">
            {image}
          </div>
          <div className="description">
            <p id="desc">
              {this.props.description}
            </p>
          </div>
          <div className="link">
            <div className="col-12 row">
              <div
                className="col-12"
                style={{
                  paddingLeft: "0px"
                }}
              >
                <div className="showFullCard">Show Detail</div>
              </div>
            </div>
          </div>
          <div className="progressbarCard">
            <div
              className="fill"
              style={{
                width: progressNew,
                borderTopRightRadius: borderRad
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
