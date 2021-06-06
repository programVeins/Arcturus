import React, { Component } from 'react'
import * as contentful from 'contentful'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { CSSTransition } from 'react-transition-group';
import { Stagger, Fade } from 'react-animation-components';
import { Helmet } from 'react-helmet';
import craftPosts from '../Data/craftPosts';


export default class BlogComp extends Component {
   
    state = {
        totalPosts: [],
        isLoading: false
    }

    client = contentful.createClient({
        space: 'cb0js1rlr1ot',
        accessToken: '9UFUkPaSG1dmwDtdevNj7eQKieybJO_cBZFotZDhM6s'
      })

    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchPosts().then(this.setPosts);
    }

    fetchPosts = () => this.client.getEntries()

    setPosts = response => {

        response.items.map((post,i) => {

            const dateFormatter = post.fields.date.split('T')[0]
            post.fields.date = new Date(dateFormatter.split('-')[0], dateFormatter.split('-')[1] - 1, dateFormatter.split('-')[2])

            this.setState({
                totalPosts: this.state.totalPosts.concat(post.fields)
            })
            return null
        })

        craftPosts.map((post, i) => { 

            if(typeof(post.date) != 'object'){
                const dateFormatter = post.date.split('T')[0]
                post.date = new Date(dateFormatter.split('-')[0], dateFormatter.split('-')[1] - 1, dateFormatter.split('-')[2])
            }

            this.setState({
                totalPosts: this.state.totalPosts.concat(post)
            })

            return null
        })

    
        this.setState({isLoading: false});

        console.log(this.state)

        this.setState({
            totalPosts: this.state.totalPosts.sort((a, b) => b.date - a.date)
        })
    }

    render() {
        if (this.state.isLoading) {
            return  (<div className={"spinner-border " + (this.props.darkMode ? "spin-dark" : "spin-light")} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>);
        }
        return (
            <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                <div className="container-fluid">
                        <Helmet>
                            <title>Blog</title>
                            <meta name="description" content="Sabesh Bharathi - Blog"/>
                            <meta name="keywords" content="Sabesh Bharathi, Blog, Posts, Development, Design"/>
                        </Helmet>
                    <Stagger in delay={50} duration={300}>
                        <Fade in>
                            <div className="row">
                                <div className="col">
                                    <h3 className="jostfont">Blog</h3>
                                </div>
                            </div>
                        </Fade>
                        <br/><br/><br/>
                        <Fade in>
                            <div className="row justify-content-center">

                                { this.state.totalPosts.map((item, i) =>
                                    {
                                        if(item.id != null){
                                            return (
                                                <div className={"col-lg-3 my-5 mx-5 blogcard p-0 " + (this.props.darkMode ? "carddark" : "cardlight")}
                                                    onClick={() => this.props.changePost(i)}>
                                                    <a href={item.link} className="nonedec">
                                                        <img className="blogimg mb-5 " alt={item.title} src={item.thumbnail} height="auto" width="100%"/>
                                                        <h5 className="jostfont">{item.title}</h5>
                                                        
                                                        <p className="montfont text-justify p-4">{item.desc.substr(0,200)}</p>
                                                        <p className="montfont text-left pl-4">
                                                            <Moment format="LL">{item.date}</Moment>
                                                            <span className="ext-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                                                </svg>
                                                            </span>
                                                        </p>
                                                    </a>
                                                </div>
                                            );
                                        }
                                        else {
                                            return (
                                                <div className={"col-lg-3 my-5 mx-5 blogcard p-0 " + (this.props.darkMode ? "carddark" : "cardlight")}
                                                    onClick={() => this.props.changePost(i)}>
                                                    <Link to={`/blog/${item.path}`} className="nonedec">
                                                        <img className="blogimg mb-5 " alt={item.title} src={item.pic.fields.file.url} height="auto" width="100%"/>
                                                        <h5 className="jostfont">{item.title}</h5>
                                                        <p className="montfont text-justify p-4">{item.content.substr(0,180)} ...</p>
                                                        <p className="montfont text-left pl-4"><Moment format="LL">{item.date}</Moment></p>
                                                    </Link>
                                                </div>
                                            );
                                        }
                                        
                                    }
                                )}

                               
                            </div>
                        </Fade>
                        <br/><br/><br/>
                    </Stagger>
                </div>
            </CSSTransition>
        )
    }

}