import React, { Component } from 'react'
import me from '../Data/me'

export default class FooterComp extends Component {
    render() {
        return (
            <div className="container">
                <br/><br/><br/><br/>
                <p className="montfont text-8">"Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it."</p>
                <p className="montfont text-right text-8">- Albus Dumbledore</p>
                <br/><br/>
                <div className="row justify-content-center">
                   <div className="col-3 col-md-2 center-block">
                        <img src={me.memoji} alt="Memoji" height="auto" width="100%"/>
                    </div>
                </div>
                <p className="jostfont text-8">Sabesh Bharathi © 2020</p>
                <br/><br/>
            </div>
        )
    }
}
