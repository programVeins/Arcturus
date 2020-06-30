import React, { Component } from 'react'
import NavComp from './NavComp'

export default class AboutComp extends Component {

    render() {
        return (
            <div className="container-fluid">
                <br/><br/><br/><br/><br/><br/>
                <NavComp toggleDarkMode={this.props.toggleDarkMode}/>
                <br/><br/><br/>
                <div className="container">
                    
                    <div className="row">
                       <div className="col">
                          <h3 className="jostfont">Me, Myself and I</h3>
                       </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col">
                        <div className="p-3 bg-info my-2 rounded">
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
