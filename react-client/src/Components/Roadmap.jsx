import React from "react";
class Roadmap extends React.Component {
  render() {
    return (
      <span>
        <div className="shadow-page" style={shadowStyle} />
        <div className="section">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </span>
    );
  }
  componentWillMount(){
    var theme = this.props.theme;
    theme = theme.toLowerCase();
    if(theme == "qubic"){
      window.onload = function() {
        document.documentElement.style.setProperty('--backgroundEntirePage', '#0a0b15');
        document.documentElement.style.setProperty('--fontColorStandard', '#FFFFFF');
        document.documentElement.style.setProperty('--seperatorLineColor', '#ff7d11');
        document.documentElement.style.setProperty('--imageBackgroundCard', '#fafafa');
        document.documentElement.style.setProperty('--progressColor', 'linear-gradient(to right, #ff7d11, #8738cc)');
        document.documentElement.style.setProperty('--cardBackground', '#fafafa');
      };
    }
    else if(theme == "standard"){
      window.onload = function() {
        document.documentElement.style.setProperty('--backgroundEntirePage', '#efefef');
        document.documentElement.style.setProperty('--fontColorStandard', '#000000');
        document.documentElement.style.setProperty('--seperatorLineColor', '#27a09a');
        document.documentElement.style.setProperty('--imageBackgroundCard', '#fafafa');
        document.documentElement.style.setProperty('--progressColor', 'linear-gradient(to right, #18817c, #22b1ab)');
        document.documentElement.style.setProperty('--cardBackground', '#fafafa');
      };
    }
  }
}
const shadowStyle = {
  display: 'none'
};

export default Roadmap;
