import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             redirectAbout : false,
             redirectProjcts : false,
             redirectHome: false,
             labels : {
                 changetheme: false,
                 home: false,
                 about: false,
                 blog: false,
             }
        }
        this.handleTheme = this.handleTheme.bind(this);

        this.showtheme = this.showtheme.bind(this);
        this.showhome = this.showhome.bind(this);
        this.showabout = this.showabout.bind(this);
        this.showblog = this.showblog.bind(this);
        this.hidetheme = this.hidetheme.bind(this);
        this.hidehome = this.hidehome.bind(this);
        this.hideabout = this.hideabout.bind(this);
        this.hideblog = this.hideblog.bind(this);

    }
    
    handleTheme() {
        this.props.toggleDarkMode();
    }


    showtheme() {
        this.setState({labels: {changetheme: true}});
    }
    showhome() {
        this.setState({labels: {home: true}});
    }
    showabout() {
        this.setState({labels: {about: true}});
    }
    showblog() {
        this.setState({labels: {blog: true}});
    }

    hidetheme() {
        this.setState({labels: {changetheme: false}});
    }
    hidehome() {
        this.setState({labels: {home: false}});
    }
    hideabout() {
        this.setState({labels: {about: false}});
    }
    hideblog() {
        this.setState({labels: {blog: false}});
    }




    render() {
        return (
                <>
                    <div className="row justify-content-center align-items-center">

                        {/* Large Nav Icons */}
                        <div className="col d-none d-md-block">
                            <div className={this.props.iconcol + " icorotate largenav"} onClick={this.handleTheme}
                                onMouseEnter={this.showtheme} onMouseLeave={this.hidetheme}>
                                {this.props.iconcol === "icolight" ?
                                    <svg class="bi bi-sun" width="100%" height="auto" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                                        <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
                                    </svg> :
                                    <svg class="bi bi-moon" width="100%" height="auto" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                                    </svg> 
                                }
                            </div>
                        </div>  
                        <div className="col d-none d-md-block">
                            <div className={this.props.iconcol + " icozoom largenav"}
                                onMouseEnter={this.showhome} onMouseLeave={this.hidehome}>
                                <NavLink className="nonedec" to="/home">
                                    <svg width="100%" height="auto" viewBox="0 0 16 16" class="bi bi-hexagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>  
                        <div className="col d-none d-md-block">
                            <div className={this.props.iconcol + " icozoom largenav"}
                                onMouseEnter={this.showabout} onMouseLeave={this.hideabout}>
                                <NavLink className="nonedec" to="/about">
                                    <svg class="bi bi-person-fill" width="100%" height="auto" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col d-none d-md-block">
                            <div className={this.props.iconcol + " icozoom largenav"}
                                onMouseEnter={this.showblog} onMouseLeave={this.hideblog}>
                                <NavLink className="nonedec" to="/blog">
                                    <svg width="100%" height="auto" viewBox="0 0 16 16" class="bi bi-file-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>

                        {/* Small Nav Icons */}
                        <div className="col d-block d-md-none">
                            <div className={this.props.iconcol + " icorotate smallnav"} onClick={() => {this.handleTheme(); this.showtheme(); setTimeout(() => {
                                this.hidetheme();
                            }, 1000);}}>
                                {this.props.iconcol === "icolight" ?
                                    <svg class="bi bi-sun" width="100%" height="auto" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                                        <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
                                    </svg> :
                                    <svg class="bi bi-moon" width="100%" height="auto" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                                    </svg> 
                                }
                            </div>
                        </div>  
                        <div className="col d-block d-md-none">
                            <div className={this.props.iconcol + " icozoom smallnav"}
                                onClick={() => {this.showhome(); setTimeout(() => {
                                    this.hidehome();
                                }, 1000);}}>
                                <NavLink className="nonedec" to="/home">
                                    <svg width="100%" height="auto" viewBox="0 0 16 16" class="bi bi-hexagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>  
                        <div className="col d-block d-md-none">
                            <div className={this.props.iconcol + " icozoom smallnav"}
                                onClick={() => {this.showabout(); setTimeout(() => {
                                    this.hideabout();
                                }, 1000);}}>
                                <NavLink className="nonedec" to="/about">
                                    <svg class="bi bi-person-fill" width="100%" height="auto" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col d-block d-md-none">
                            <div className={this.props.iconcol + " icozoom smallnav"}
                                onClick={() => {this.showblog(); setTimeout(() => {
                                    this.hideblog();
                                }, 1000);}}>
                                <NavLink className="nonedec" to="/blog">
                                    <svg width="100%" height="auto" viewBox="0 0 16 16" class="bi bi-file-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col my-2">
                          {this.state.labels.changetheme ? <p className="jostfont textvis"> <br/> Theme</p> : <p className="jostfont texthid"> <br/> Theme</p>}
                       </div>
                       <div className="col">
                          {this.state.labels.home ? <p className="jostfont textvis"> <br/> Home </p> : <p className="jostfont texthid"> <br/> Home </p>}
                       </div>
                       <div className="col">
                          {this.state.labels.about ? <p className="jostfont textvis"> <br/> About </p> : <p className="jostfont texthid"> <br/> About </p>}
                       </div>
                       <div className="col">
                          {this.state.labels.blog ? <p className="jostfont textvis"> <br/> Blog </p> : <p className="jostfont texthid"> <br/> Blog </p>}
                       </div>
                    </div>
                </>
        );
    }
}
