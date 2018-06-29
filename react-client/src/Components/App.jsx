import React, { Component } from 'react';
import Roadmap from './Roadmap';
import Section from './Section';
import Project from './Project';
import "../../dist/cards";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            roadmap: [],
            theme: null
        };
    }
    componentDidMount() {
        fetch("https://raw.githubusercontent.com/myhrmans/roadmap-react/master/components.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        roadmap: result.Roadmap,
                        theme: result.Roadmap[0].Theme
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true, 
                        error
                    });
                }
            )

    }
    render() {
        const { error, isLoaded, roadmap, theme } = this.state;
        var sections = [];
        var project = [];
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <Roadmap theme={theme}>
                {roadmap.slice(1).map(function(section,i){
                    //console.log(section.Section);
                    return(
                        <Section key={i} title={section.Section[0].Title} description={section.Section[0].Text}>
                        {section.Section[1].Projects.map(function(project,index){
                                return(
                                    <Project key={index} title={project.Project.Title} svg="svgs/employeetwo.svg" description={project.Project.Description} progress={project.Project.Done}></Project>
                                )  
                        })}
                        </Section>
                    )

                })

            
                
            /*for (var i = 1; i < roadmap.length; i++) {
                page += "<Section title=" + roadmap[i].Section[0].Title + " description=" + roadmap[i].Section[0].Text + ">"
                for (var j = 0; j < roadmap[i].Section[1].Projects.length; j++) {
                project.push(<Project title={roadmap[i].Section[1].Projects[j].Project.Title} svg={roadmap[i].Section[1].Projects[j].Project.SvgURL} description={roadmap[i].Section[1].Projects[j].Project.Description} progress={roadmap[i].Section[1].Projects[j].Project.Done}></Project>);
                }
                page+="</Section>"*/
            }
            </Roadmap>
            </div>
        )
                }
        return (
            <span>
                <Roadmap theme="quBiC"> {/*Avalible themes: Qubic, standard*/}
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