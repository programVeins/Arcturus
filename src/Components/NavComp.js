import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             iconCol: "icolight",
             redirectAbout : false,
             redirectProjcts : false,
             redirectHome: false
        }
        this.handleTheme = this.handleTheme.bind(this);
    }
    
    handleTheme() {
        this.setState({iconCol: (this.state.iconCol === "icolight") ? "icodark" : "icolight" });
        this.props.toggleDarkMode();
    }

    render() {
        return (
            <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <div className={this.state.iconCol + " icorotate"} onClick={this.handleTheme}>
                            {this.state.iconCol === "icolight" ?
                                <svg class="bi bi-sun" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                                    <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
                                </svg> :
                                <svg class="bi bi-moon" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                                </svg> 
                            }
                        </div>
                    </div>  
                    <div className="col">
                        <div className={this.state.iconCol + " icoopac"} onClick={this.handleHome}>
                            <NavLink className="nonedec" to="/home">
                                <svg width="1.9em" height="1.9em" viewBox="0 0 16 16" class="bi bi-hexagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
                                </svg>
                            </NavLink>
                        </div>
                    </div>  
                    <div className="col">
                        <div className={this.state.iconCol + " icozoom"} onClick={this.handleAbout}>
                            <NavLink className="nonedec" to="/about">
                                <svg class="bi bi-person-fill" width="2.4em" height="2.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <div className={this.state.iconCol + " icodown"} onClick={this.handleProjects}>
                            <NavLink className="nonedec" to="/projects">
                                <svg class="bi bi-folder-fill" width="2.2em" height="2.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
        );
    }
}
