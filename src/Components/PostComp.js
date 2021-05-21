import React, { Component } from 'react'
import * as contentful from 'contentful'
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { CSSTransition } from 'react-transition-group';
import { Stagger, Fade } from 'react-animation-components';
import { Helmet } from 'react-helmet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default class PostComp extends Component {

    state = {
        isLoading: false,
        posts: [],
        url: "",
        thisPost: {
            sys : {},
            fields: {
                title: "404 Article not found",
                path: "",
                content: "<p style=\"text-align: center;\">Yikes! I was unable to find the post you are looking for. Please go back 😔</p>",
                date: "",
                banner : {
                    sys: {},
                    fields: {
                        title: "",
                        file: {
                            url: ""
                        }
                    }
                }

            }
        }
      }

    client = contentful.createClient({
        space: 'cb0js1rlr1ot',
        accessToken: '9UFUkPaSG1dmwDtdevNj7eQKieybJO_cBZFotZDhM6s'
      })

    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchPosts().then(this.setPosts);
        this.setState({url: window.location.href.split('blog/')[1]});
    }

    fetchPosts = () => this.client.getEntries()

    setPosts = response => {
        this.setState({
          posts: response.items
        });
        this.state.posts.forEach((item, index) => {
            if (item.fields.path === this.state.url) {
                this.setState({
                    thisPost: this.state.posts[index]
                  })
            }
        } )
        this.setState({isLoading: false});
        
    }

    render() {
        var current = this.state.thisPost.fields;
        var picc = this.state.thisPost.fields.banner.fields;
        if (this.state.isLoading) {
            return  (<div className={"spinner-border " + (this.props.darkMode ? "spin-dark" : "spin-light")} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>);
        }
        return (
            <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                <div className="container">
                        <Helmet>
                            <title>{current.title}</title>
                            <meta name="description" content={"Blog - " + current.title}/>
                            <meta name="keywords" content="Sabesh Bharathi, Blog, Post, Development, Design"/>
                        </Helmet>
                    <Stagger in delay={100} duration={300}>
                        <Fade in>
                            <div className="row">
                               <div className="col">
                               <Link to="/blog">
                                   <span className={"float-left " + (this.props.darkMode ? "arrowdark" : "arrowlight")}>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">

                                            <defs>
                                                <linearGradient id="MyGradient">
                                                <stop offset="5%" stop-color={this.props.darkMode ? "#46e9bb" : "#ec8841" } />
                                                <stop offset="95%" stop-color={this.props.darkMode ? "#43b6e3" : "#ec5567" } />
                                                </linearGradient>
                                            </defs>

                                            <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                   </span>
                               </Link>
                               </div>
                            </div>
                        </Fade>
                        <Fade in>
                            <div className="row">
                                <div className={"col my-5 p-0 " + (this.props.darkMode ? "carddark fixeddark" : "cardlight fixedlight")}>
                                    <img alt={picc.title} src={picc.file.url}
                                    width="100%" height="auto" className="blogimg"/>
                                    <h3 className="jostfont px-3 mt-5">{current.title}</h3>
                                    <p className="montfont text-justify text-8 p-5 blogtext">
                                        {
                                            current.content.split('<test>').map((eachPart, index) => {
                                                if (index % 2 === 0)
                                                {
                                                    return <Markdown source={eachPart} escapeHtml={false}/>
                                                }

                                                return (
                                                    <SyntaxHighlighter language="css"
                                                    style={(this.props.darkMode) ? nord : atomOneDark}
                                                    className={(this.props.darkMode) ? "code-block" : "code-block code-shadow"}
                                                    >
                                                        {"\n" + eachPart + "\n"}
                                                    </SyntaxHighlighter>
                                                );
                                            })
                                        }
                                        
                                    </p>
                                    <br/>
                                    <p className="montfont p-5 text-9 text-left">
                                        {current.date !== "" ?
                                            <Moment format="DD/MM/YYYY - HH:mm">{current.date}</Moment> : 
                                            <></>
                                        }
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </Stagger>
                </div>
            </CSSTransition>
        )
    }
}
