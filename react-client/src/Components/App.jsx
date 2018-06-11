import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Roadmap from './Roadmap';
import Section from './Section';
import Project from './Project';
import "../../dist/cards";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Roadmap>
              <Section title="Mobileasdasd" description="YES">
                  <Project></Project>
                  <Project></Project>
                  <Project></Project>
                  <Project></Project>
                  <Project></Project>
                  </Section>
              </Roadmap>
        </div>
      </Router>
    )
  }
}
export default App;