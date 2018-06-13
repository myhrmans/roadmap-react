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
                  <Project title="asdasdas" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." progress="104"></Project>
                  <Project title="Test" description="test" progress="20"></Project>
                  <Project title="Test" description="test" progress="50"></Project>
                  <Project title="Test" description="test" progress="60"></Project>
              </Section>
              <Section title="Desktop" description="YES">
                  <Project title="Test" description="test" progress="80"></Project>
                  <Project title="Test" description="test" progress="90"></Project>
                  <Project title="Test" description="test" progress="21231230"></Project>
                  <Project title="Test" description="test" progress="-220"></Project>
              </Section>
          </Roadmap>
        </div>
    )
  }
}
export default App;