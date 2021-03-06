import React, { Component } from 'react'
import me from '../Data/me'

export default class FooterComp extends Component {

    state = {
        memojiID : 0
    }

    changeMemoji = () => {
        if(this.state.memojiID === 6) {
            this.setState({memojiID : 0})
        }
        else {
            this.setState({memojiID : this.state.memojiID + 1})
        }
    }

    render() {
        return (
            <div className="container">
                <br/><br/><br/><br/>
                <p className="montfont text-8">"Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it."</p>
                <p className="montfont text-right text-8">- Albus Dumbledore</p>
                <br/><br/>
                <div className="row justify-content-center">
                    <div onClick={() => this.changeMemoji()} className="col-3 col-md-2 center-block">
                        <img src={me.memoji[this.state.memojiID]} alt="Memoji" height="auto" width="100%"/>
                    </div>
                </div>
        <p className="jostfont text-8">Sabesh Bharathi © {(new Date()).getFullYear()}</p>
                <span className="jostfont text-9">
                    Designed with  
                </span>
                <span className="heart">
                    <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="MyGradient">
                                <stop offset="5%" stop-color={this.props.darkMode ? "#46e9bb" : "#ec8841" } />
                                <stop offset="95%" stop-color={this.props.darkMode ? "#43b6e3" : "#ec5567" } />
                            </linearGradient>
                        </defs>
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </span>
                <span className="jostfont text-9">
                    using React
                </span>
                
                <br/><br/>
            </div>
        )
    }
}
