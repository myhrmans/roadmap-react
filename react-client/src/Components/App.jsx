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
        <div>
          <Roadmap>
              <Section title="Mobile" description="YES">
                  <Project title="Test" description="test" progress="20%"></Project>
                  <Project title="Test" description="test" progress="20%"></Project>
                  <Project title="Test" description="test" progress="20%"></Project>
                  <Project title="Test" description="test" progress="20%"></Project>
              </Section>
              <Section title="Desktop" description="YES">
                  <Project title="Test" description="test" progress="20%"></Project>
                  <Project title="Test" description="test" progress="20%"></Project>
                  <Project title="Test" description="test" progress="20%"></Project>
                  <Project title="Test" description="test" progress="20%"></Project>
              </Section>
          </Roadmap>
        </div>
    )
  }
}
export default App;