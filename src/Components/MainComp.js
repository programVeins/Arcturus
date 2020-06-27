import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComp from './HomeComp';
import AboutComp from './AboutComp';


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
                <Switch>

                    <Route exact path="/home" render={(props) =>
                        <HomeComp {...props}
                         toggleDarkMode={this.toggleDarkMode}
                         darkMode={this.state.darkMode}/>}/>

                    <Route exact path="/about" render={(props) =>
                        <AboutComp {...props}
                         toggleDarkMode={this.toggleDarkMode}/>}/>

                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}
