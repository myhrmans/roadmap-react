import React from "react";
class Project extends React.Component {
  render() {
    return (
      <div className="col-lg-4 block col-xl-3">
        <div className="roadmap-block roadmap-block-shadow">
          <h2 className="cardTitle">Fingerprint Authentication</h2>
          <div className="svg">
            <svg />
          </div>
          <div className="description">
            <p id="desc">
              Current implementations of fingerprint authentication are reliant
              on storing the seed in an unsafe space, prone to attack if the
              phone is stolen and rooted. We are examining novel ways of
              overcoming this issue.
            </p>
            <span
              className="descRows"
              style={{
                display: "none"
              }}
            >
              6
            </span>
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
                width: "80%",
                borderTopRightRadius: "5px"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
