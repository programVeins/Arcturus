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
        <p className="jostfont text-8">Sabesh Bharathi © {(new Date()).getFullYear()}</p>
                <span className="jostfont text-9">
                    Developed with  
                </span>
                <span className="heart">
                    <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </span>
                
                <br/><br/>
            </div>
        )
    }
}
