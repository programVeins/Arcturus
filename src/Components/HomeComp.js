import React, { Component } from 'react'
import NavComp from './NavComp';
import projects from '../Data/projects';


export default class HomeComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             iconCol: "icolight",
        }
        this.handleTheme = this.handleTheme.bind(this);
        this.getAge = this.getAge.bind(this);
    }
    
    handleTheme() {
        this.setState({iconCol: (this.state.iconCol === "icolight") ? "icodark" : "icolight" });
        this.props.toggleDarkMode();
    }

    getAge(d1, d2){
        d2 = d2 || new Date();
        var diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }


    render() {
        return (
            <div className="container-fluid">
                <br/><br/><br/><br/><br/><br/>
                <NavComp toggleDarkMode={this.props.toggleDarkMode}/>
                <br/><br/><br/>
                <div className="row">
                    <div className="col">
                        <img className={this.props.darkMode ? "imgdark" : "imglight"} alt="mainpic" src="./assets/images/pics/sabesh.png"/>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col">
                        <h1 className="jostfont">Sabesh Bharathi</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="jostfont">Web/iOS Developer. UI/UX Designer.</p>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className={this.props.darkMode ? "carddark" : "cardlight"}>
                                <h5 className={"montfont text-justify " + (this.props.darkMode ? "lightfont" : "darkfont") }>
                                    {`Hello! I am Sabesh. I'm ${this.getAge(new Date(2001, 5, 5))} and come from Chennai, India.
                                    I am an adept Web Developer and find myself crawling towards
                                    the beauties and aesthetics of the web. I also work extensively
                                    with iOS using swift. I feel like it's every consumer's necessity
                                    to experience quality products, with a robust feature-set whilst
                                    enjoying a hassle-free User experience. I strive to make that possible
                                    in every product I develop/design.`}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>
                    <div className="row justify-content-center">
                        <div className="col-sm-9 text-left">
                            <h4 className="jostfont">Top Projects</h4>
                        </div>
                    </div>
                    <br/><br/><br/><br/>
                    <div className="row justify-content-center">
                        {projects.map((project,index) => {
                            if (project.featured === true) {
                                return(
                                    <div className="col-lg-4">
                                        <div className={this.props.darkMode ? "carddark" : "cardlight"}>
                                            <br/>
                                            <img src={project.img} alt={project.name}
                                            height="50px" width="50px" className="rounded"/>
                                            <br/>
                                            <br/>
                                            <h5 className={"jostfont " + (this.props.darkMode ? "lightfont" : "darkfont")}>{project.name}</h5>
                                            <br/>
                                            <br/>
                                            <p className={"px-4 montfont text-justify " + (this.props.darkMode ? "lightfont" : "darkfont")}>{project.description}</p>
                                            <br/>
                                            <br/>
                                            <a className={"jostfont " + (this.props.darkMode ? "butdark" : "butlight")} href={project.link}>Go</a>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                );
                            }
                            else return(<></>);
                        })}
                    </div>
                    <br/><br/><br/><br/>
                </div>
            </div>
        )
    }
}
