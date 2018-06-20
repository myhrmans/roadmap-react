import React, { Component } from 'react';
import Roadmap from './Roadmap';
import Section from './Section';
import Project from './Project';
import "../../dist/cards";

class App extends Component {
   
    /*componentDidMount() {   
        var json = $.getJSON('https://raw.githubusercontent.com/myhrmans/roadmap-react/master/components.json')
     
    }*/
    render() {
        return (
            <span>
                <Roadmap theme="staNdard">
                    <Section title="Mobile" description="First section">
                        <Project title="asdasdas" svg="svgs/employee.svg" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." progress="104"></Project>
                        <Project title="Test" svg="svgs/event.svg" description="test" progress="20"></Project>
                        <Project title="Test" svg="svgs/employeetwo.svg" description="test" progress="50"></Project>
                        <Project title="Test" svg="svgs/innovation.svg" description="test" progress="60"></Project>
                    </Section>
                    <Section title="Desktop" description="YES">
                        <Project title="Test" svg="" description="test" progress="80"></Project>
                        <Project title="Test" svg="svgs/employee.svg" description="test" progress="90"></Project>
                        <Project title="Test" svg="svgs/employee.svg" description="test" progress="21231230"></Project>
                        <Project title="Test" svg="svgs/employee.svg" description="test" progress="-220"></Project>
                    </Section>
                </Roadmap>
            </span>
        )
    }
}
export default App;