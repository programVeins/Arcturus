import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComp from './HomeComp';
import AboutComp from './AboutComp';
import NavComp from './NavComp';
import BlogComp from './BlogComp';
import PostComp from './PostComp';
import FooterComp from './FooterComp';
import NotFound from './NotFound';


export default class MainComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedPost: 0,
            darkMode: true,
            iconCol: "icolight"
        }
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.changePost = this.changePost.bind(this);
    }

    changePost(p) {
        this.setState({selectedPost: p});
    }

    toggleDarkMode() {
        document.body.style.backgroundColor = this.state.darkMode ? "#ffffff" : "#111";
        this.setState({darkMode: !this.state.darkMode});
        this.setState({iconCol: this.state.darkMode ? "icodark" : "icolight"});
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#111";
        let sysLight = window.matchMedia('(prefers-color-scheme: light)');
        if (sysLight.matches) {
            this.toggleDarkMode()
        }
    }

    render() {
        return (
            <div className={(this.state.darkMode ? "dark" : "light") + " full container-fluid"}>
                <br/><br/><br/><br/><br/><br/>
                <NavComp toggleDarkMode={this.toggleDarkMode} darkMode={this.state.darkMode}
                iconcol={this.state.iconCol}/>
                <br/><br/><br/>
                <Switch>

                    <Route exact path="/home" render={(props) =>
                        <HomeComp {...props}
                         darkMode={this.state.darkMode}/>}/>
                        
                    <Route exact path="/" render={(props) =>
                        <Redirect to="/home"/>}/>

                    <Route exact path="/about" render={(props) =>
                        <AboutComp {...props}
                         darkMode={this.state.darkMode}/>}/>

                    <Route exact path="/blog" render={(props) =>
                        <BlogComp {...props}
                         darkMode={this.state.darkMode}
                         changePost={this.changePost}/>}/>

                    <Route path="/blog/" render={(props) =>
                        <PostComp {...props}
                         post={this.state.selectedPost}
                         darkMode={this.state.darkMode}/>}/>

                    <Route exact path="/not-found" render={(props) =>
                        <NotFound {...props}
                         darkMode={this.state.darkMode}/>}/>

                    <Redirect to="/not-found"/>
                </Switch>
                <FooterComp darkMode={this.state.darkMode}/>
            </div>
        )
    }
}
