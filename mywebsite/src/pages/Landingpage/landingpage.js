import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import './landingpage.css';

class Landingpage extends Component {
    constructor(){
        super();
        this.skillInformation=[
{
name:"HTML",
desc:"I will write semantic markup in HTML5 which is latest standard of core technology of web.",
imgUrl:"images/html.png"
},
{
name:"CSS",
desc:"I will style webpages using CSS3 levaraging on the new CSS3 modules,making modern websites.",
imgUrl:"images/css.png"
},
{
name:"RESPONSIVE DESIGN",
desc:" I will build websites that look awesome not only on desktops, but also on mobile phones and tablets.",
imgUrl:"images/res.png"
},
{
name:"UI & UX DESIGN",
desc:"I will learn basics of UI & UX Design and use these concepts in build apps that are both functional and usable.",
imgUrl:"images/ui.png"
},
{
name:"JAVASCRIPT",
desc:" I will define the behavior of web pages using java script.I will dive deeper into amazing parts of java script.",
imgUrl:"images/js.png"
},
{
name:"JQUERY",
desc:"I will enhance the behavior of web pages levaraging on jQuery and jQuery plug-in.",
imgUrl:"images/jq.png"
},
{
name:"TYPESCRIPT",
desc:"I will start writing object oriented programs using TypeScript.I will build games using TypeScript.",
imgUrl:"images/ts.png"
},
{
name:"RXJS",
desc:" I will build event-driven,resilient and responsive apps using reactive architectures.",
imgUrl:"images/rxjs.png"
},
{
name:"UNIX",
desc:"I will become a ninja hacker who prefer command line to graphical user interface.",
imgUrl:"images/unix.png"
},
{
name:"GIT & HEROKU",
desc:"I will start following git workflow using github.I will also deploy lr applications with heroku.",
imgUrl:"images/git.png"
    },
{
name:"NPM",
desc:"I will use npm the default package manager for Node js, to reuse some of the best utilities written already.",
imgUrl:"images/npm.png"
},
{
name:"DOCKER",
desc:"I will use docker to simplify configuration,increase Ir productivity,isolate Ir apps, and automate deployments.",
imgUrl:"images/docker.png"
}
// {
// name:"HTML",
// desc:"aaaa",
// imgUrl:"images/html.png"
// },
// {
// name:"HTML",
// desc:"aaaa",
// imgUrl:"images/html.png"
//     },
// {
// name:"HTML",
// desc:"aaaa",
// imgUrl:"images/html.png"
// },
// {
// name:"HTML",
// desc:"aaaa",
// imgUrl:"images/html.png"
//     }

]
    }
  render() {
    return (
        <div class="madhu">
            <Header/>
            <div class="uppala">
            {this.skillInformation.map(skill=>{
                return(
                    <Tile name={skill.name} desc={skill.desc} imgUrl={skill.imgUrl}/>
                )
            })
            }
            </div>
            </div>
    )
}
}
      export default Landingpage;
