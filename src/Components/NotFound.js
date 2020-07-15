import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <Link to="/home">
                    <span className={"float-left " + (props.darkMode ? "arrowdark" : "arrowlight")}>
                        <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </span>
                </Link>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-2 nopadding">
                   <p className="jostfont text-1">4</p>
                </div>
               <div className="col-6 col-md-4">
                    <img src="./assets/images/pics/notfound.png" alt="Error 404"
                    height="auto" width="100%"/>
               </div>
               <div className="col-2 nopadding">
                   <p className="jostfont text-1">4</p>
                </div>
            </div>
            <br/><br/>
            <div className="row">
               <div className="col">
                  <p className="jostfont text-6">Sorry, I couldn't find the page you're looking for. Maybe the enderman stole it. Yes, Minecraft is cool.</p>
               </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
