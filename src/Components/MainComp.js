import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComp from './HomeComp';
import AboutComp from './AboutComp';
import NavComp from './NavComp';
import BlogComp from './BlogComp';


export default class MainComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             darkMode: true
        }
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }
    
    toggleDarkMode() {
        this.setState({darkMode: !this.state.darkMode});
    }

    render() {
        return (
            <div className={(this.state.darkMode ? "dark" : "light") + " full"}>
                <br/><br/><br/><br/><br/><br/>
                <NavComp toggleDarkMode={this.toggleDarkMode} darkMode={this.state.darkMode}/>
                <br/><br/><br/>
                <Switch>

                    <Route exact path="/home" render={(props) =>
                        <HomeComp {...props}
                         darkMode={this.state.darkMode}/>}/>

                    <Route exact path="/about" render={(props) =>
                        <AboutComp {...props}
                         darkMode={this.state.darkMode}/>}/>

                    <Route exact path="/blog" render={(props) =>
                        <BlogComp {...props}
                         darkMode={this.state.darkMode}/>}/>

                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}
