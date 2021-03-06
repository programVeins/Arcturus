import React, { Component } from 'react'
import projects from '../Data/projects'
import me from '../Data/me'
import { CSSTransition } from 'react-transition-group';
import { Stagger, Fade } from 'react-animation-components';
import { Helmet } from 'react-helmet';
import IllCarousel from './Carousel';

export default class AboutComp extends Component {
    
    state = {
        currentPage: 1,
        totalPages: Math.ceil(projects.length / 3)
    }

    render() {

        console.log(this.state)
        var skillnames = me.skillset.skillnames.split(',');
        var emojis = me.skillset.emojis.split(',');
        return (
            <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                <div className="container-fluid">
                        <Helmet>
                            <title>About</title>
                            <meta name="description" content="Sabesh Bharathi - About"/>
                            <meta name="keywords" content="Sabesh Bharathi, Portfolio, About, Projects"/>
                        </Helmet>
                    <div className="container">
                        <Stagger in delay={0} duration={500}>

                            <Fade in>
                                <div className="row">
                                   <div className="col">
                                      <h3 className="jostfont">Me, Myself and I</h3>
                                   </div>
                                </div>
                            </Fade>
        
                            <br/><br/>
        
                            <Fade in>
                                <div className="row">
                                   <div className="col">
                                        <h3 className="jostfont text-left d-none d-lg-block">Introductions</h3>
                                        <h3 className="jostfont text-center d-block d-lg-none">Introductions</h3>
                                   </div>
                                </div>
                            </Fade>
                            <br/>
                            <Fade in>
                                <div className={"row align-items-center my-2 " + (this.props.darkMode ? "carddark fixeddark" : "cardlight fixedlight")}>
                                    <div className="col-md-3 p-5 d-block d-md-none">
                                        <img src={me.aboutimg} alt={me.name} align="right"
                                        width="100%" height="auto" className={this.props.darkMode ? "aboutimgdark" : "aboutimglight"}/>
                                   </div>
                                   <div className="col p-4">
                                        <div className="montfont text-8 text-left">{me.aboutdes}</div>
                                   </div>
                                   <div className="col-md-4 d-none d-md-block d-lg-none">
                                        <img src={me.aboutimg} alt={me.name}
                                        width="100%" height="auto" className={this.props.darkMode ? "aboutimgdark" : "aboutimglight"}/>
                                   </div>
                                   <div className="col-md-3 large-padding d-none d-lg-block">
                                        <img src={me.aboutimg} alt={me.name}
                                        width="100%" height="auto" className={this.props.darkMode ? "aboutimgdark" : "aboutimglight"}/>
                                   </div>
                                </div>
                            </Fade>
        
                            <br/><br/>
        
                            <Fade in>
                                <div className="row">
                                   <div className="col">
                                   <h3 className="jostfont text-left">Skillset</h3>
                                   </div>
                                </div>
                            </Fade>
                            <br/>
                            <Fade in>
                                <div className={"row my-2 " + (this.props.darkMode ? "carddark fixeddark" : "cardlight fixedlight")}>
                                    {skillnames.map((skillname,index) => {
                                        return (
                                            <div className="col-3 col-md-2 my-4">
                                                <span className="px-md-3 py-1 jostfont text-9">{skillname}</span> <br/>
                                                <span className="px-md-3 py-1 jostfont text-9">{emojis[index]}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Fade>
        
                            <br/><br/>
        
                            <Fade in>
                                <div className="row">
                                   <div className="col">
                                   <h3 className="jostfont text-left">Contact</h3>
                                   </div>
                                </div>
                            </Fade>
                            <Fade in>
                                <div className="row justify-content-center">
                                    {me.contact.map((each,index) => {
                                        return (
                                            <>
                                                <div className="col-3 mt-3 mx-auto social-ico">
                                                    <a href={each.link} target="_blank" rel="noopener noreferrer">
                                                        <div className={"p-3 " + (this.props.darkMode ? "carddark" : "cardlight")}>
                                                            <img src={each.ico} alt={each.link}/>
                                                        </div>
                                                    </a>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </Fade>
                            <br/><br/>
        
                            <Fade in>
                                <div className="row mb-4" id="proj">
                                   <div className="col">
                                      <h3 className="jostfont text-left">Projects</h3>
                                   </div>
                                </div>
                                <br/>
                            </Fade>
                            {projects.map((proj, index) => {
                                var tags = proj.techStack.split(",")

                                if (Math.ceil((proj.id+1) / 3) === this.state.currentPage)
                                return(
                                    <Fade in>
                                            <div className={"row justify-content-center align-items-center my-2 py-5 " + (this.props.darkMode ? "carddark" : "cardlight")}>
                                                <div className="col-md-1 mx-4">
                                                    <img src={proj.img} alt={proj.name}
                                                    height="70" width="70"/>
                                                </div>
                                                <div className="col mx-3">
                                                    <h4 className="jostfont text-left d-none d-md-block">{proj.name}</h4>
                                                    <h4 className="jostfont text-center my-5 d-block d-md-none">{proj.name}</h4>
                                                    <p className="montfont text-justify">{proj.extdes}</p>
                                                    <div className="text-left">
                                                        {tags.map((tag, indexx) => {
                                                            return(
                                                                <>
                                                                    <br className={(indexx % 2 === 0) ? "d-block d-md-none" :"d-none"}/>
                                                                    <span className={"px-2 py-1 mr-3 badge mt-2 montfont text-10 " + (this.props.darkMode ? "tagdark" : "taglight")}>{tag}</span>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                    
                                                    <a href={proj.link} target="_blank" rel="noopener noreferrer">
                                                        <span className={"float-right mt-3 mx-3 " + (this.props.darkMode ? "arrowdark" : "arrowlight")}>
                                                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <defs>
                                                                    <linearGradient id="MyGradient">
                                                                    <stop offset="5%" stop-color={this.props.darkMode ? "#46e9bb" : "#ec8841" } />
                                                                    <stop offset="95%" stop-color={this.props.darkMode ? "#43b6e3" : "#ec5567" } />
                                                                    </linearGradient>
                                                                </defs>
                                                                <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                   { (proj.openSource) ?
                                                    <a href={proj.ghLink} target="_blank" rel="noopener noreferrer">
                                                        <span className={"float-right mt-3 mx-3 " + (this.props.darkMode ? "arrowdark" : "arrowlight")}>
                                                            <img src="assets/images/social/github.svg" alt="github-link" height="30em"/>
                                                        </span>
                                                    </a> : null
                                                    }
                                                </div>
                                            </div>
                                            <br/><br/>
                                    </Fade>
                                )

                                else {
                                    return <div></div>
                                }
                            })}

                            <Fade in>
                                <div className="flex row justify-content-center">
                                    {
                                        [...Array(this.state.totalPages)].map((e,i) => {
                                            return(
                                                <div className="col-4 mt-3 my-pagination justify-content-center" key={i}>
                                                    <div onClick={() => {
                                                    this.setState({currentPage: i+1})
                                                    document.getElementById('proj').scrollIntoView();    
                                                }}
                                                        className={"px-4 py-3 " + (this.props.darkMode ? "carddark fixeddark" : "cardlight fixedlight")}>
                                                        <h4 className={this.state.currentPage === (i+1) ? ( this.props.darkMode ? "grad-text-dark" : "grad-text-light") : "" }>{i+1}</h4>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </Fade>


                            <Fade className="ils" in>
                                <div className="row mt-5" id="proj">
                                   <div className="col">
                                      <h3 className="jostfont text-left">Illustrations</h3>
                                   </div>
                                </div>
                                <br/>
                            </Fade>

                            <Fade className="ils" in>
                                <IllCarousel darkMode={this.props.darkMode}/>
                            </Fade>   
                        </Stagger>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}
