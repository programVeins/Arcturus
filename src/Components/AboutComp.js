import React, { Component } from 'react'
import NavComp from './NavComp'
import projects from '../Data/projects'

export default class AboutComp extends Component {

    render() {
        return (
            <div className="container-fluid">
                <br/><br/><br/><br/><br/><br/>
                <NavComp toggleDarkMode={this.props.toggleDarkMode} darkMode={this.props.darkMode}/>
                <br/><br/><br/>
                <div className="container">
                    
                    <div className="row">
                       <div className="col">
                          <h3 className="jostfont">Me, Myself and I</h3>
                       </div>
                    </div>

                    <br/><br/>

                    <div className="row">
                       <div className="col">
                            <h3 className="jostfont text-left">Introductions</h3>
                       </div>
                    </div>
                    <br/>
                    <div className={"row " + (this.props.darkMode ? "carddark" : "cardlight")}>
                       <div className="col">
                          <div className="montfont"> Greetings. I am Sabesh. I am a web developer, iOS developer and a UI/UX designer</div>
                       </div>
                    </div>
                    <br/><br/>


                    <div className="row">
                       <div className="col">
                          <h3 className="jostfont text-left">Projects</h3>
                       </div>
                    </div>
                    <br/>
                    {projects.map((proj, index) => {
                        var tags = proj.techStack.split(",")
                        return(
                            <React.Fragment>
                                <div className={"row justify-content-center align-items-center my-2 py-5 " + (this.props.darkMode ? "carddark" : "cardlight")}>
                                    <div className="col-1 mr-5">
                                        <img src={proj.img} alt={proj.name}
                                        height="70" width="70"/>
                                    </div>
                                    <div className="col text-left">
                                        <h4 className="jostfont">{proj.name}</h4>
                                        <p className="montfont text-justify">{proj.extdes}</p>
                                        {tags.map((tag, indexx) => {
                                            return(
                                            <span className={"px-2 py-1 mr-3 montfont text-10 " + (this.props.darkMode ? "tagdark" : "taglight")}>{tag}</span>
                                            );
                                        })}
                                        <a href={proj.link}>
                                            <span className={"float-right mx-5 " + (this.props.darkMode ? "arrowdark" : "arrowlight")}>
                                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <br/><br/>
                            </React.Fragment>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}
