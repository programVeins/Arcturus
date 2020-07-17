import React, { Component } from 'react'
import projects from '../Data/projects';
import me from '../Data/me';
import { Stagger, Fade } from 'react-animation-components';
import { CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';




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
            <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                <div className="container-fluid">
                        <Helmet>
                            <title>Home</title>
                            <meta name="description" content="Sabesh Bharathi - Home Page"/>
                            <meta name="keywords" content="Sabesh Bharathi, Blog, Portfolio"/>
                        </Helmet>
                        <Stagger in duration={250}>
                            <Fade in>
                                <div className="row">
                                    <div className="col">
                                        <img className={this.props.darkMode ? "imgdark" : "imglight"} alt="mainpic" src={me.mainimg}/>
                                    </div>
                                </div>
                                <br/><br/>
                            </Fade>
                            <Fade in>
                                <div className="row">
                                    <div className="col">
                                        <h1 className="jostfont">{me.name}</h1>
                                    </div>
                                </div>
                            </Fade>
                            <Fade in>
                                <div className="row">
                                    <div className="col">
                                        <p className="jostfont">{me.tagline}</p>
                                    </div>
                                </div>
                            </Fade>
                        </Stagger>
                    <br/><br/><br/>
                    <div className="container">
                        <Stagger in duration={800} delay={25}>
                            <Fade in>
                                <div className="row">
                                    <div className="col">
                                        <div className={this.props.darkMode ? "carddark" : "cardlight"}>
                                            <h5 className={"montfont p-4 text-8 text-justify " + (this.props.darkMode ? "lightfont" : "darkfont") }>
                                                {me.maindes}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <br/><br/><br/><br/>
                            <Fade in>
                                <div className="row justify-content-center">
                                    <div className="col-sm-9 text-left d-none d-lg-block">
                                        <h4 className="jostfont">Top Projects</h4>
                                    </div>
                                    <div className="col-sm-9 text-center d-block d-lg-none">
                                        <h4 className="jostfont">Top Projects</h4>
                                    </div>
                                </div>
                            </Fade>
                            <br/><br/>
                            <Fade in>
                                <div className="row justify-content-center">
                                    {projects.map((project,index) => {
                                        if (project.featured === true) {
                                            return(
                                                <div className="col-lg-3 my-5 mx-3">
                                                    <div className={this.props.darkMode ? "carddark" : "cardlight"}>
                                                        <br/>
                                                        <img src={project.img} alt={project.name}
                                                        height="50px" width="50px" className="rounded"/>
                                                        <br/>
                                                        <br/>
                                                        <h5 className={"jostfont px-2 " + (this.props.darkMode ? "lightfont" : "darkfont")}>{project.name}</h5>
                                                        <br/>
                                                        <br/>
                                                        <p className={"px-4 montfont text-justify " + (this.props.darkMode ? "lightfont" : "darkfont")}>{project.description}</p>
                                                        <br/>
                                                        <br/>
                                                        <a className={"jostfont " + (this.props.darkMode ? "butdark" : "butlight")} href={project.link} target="_blank" rel="noopener noreferrer">Go</a>
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
                            </Fade>
                            <br/><br/><br/><br/>
                        </Stagger>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}
