import React, { Component } from 'react'
import * as contentful from 'contentful'
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default class PostComp extends Component {

    state = {
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
        
    }

    render() {
        console.log(this.state.url)
        var current = this.state.thisPost.fields;
        var picc = this.state.thisPost.fields.banner.fields;
        return (
            <div className="container">
                <div className="row">
                   <div className="col">
                   <Link to="/blog">
                       <span className={"float-left " + (this.props.darkMode ? "arrowdark" : "arrowlight")}>
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                       </span>
                   </Link>
                   </div>
                </div>
                <div className="row">

                    <div className={"col my-5 p-0 " + (this.props.darkMode ? "carddark fixeddark" : "cardlight fixedlight")}>
                        <img alt={picc.title} src={picc.file.url}
                        width="100%" height="auto" className="blogimg"/>
                        <h3 className="jostfont px-3 mt-5">{current.title}</h3>
                        <p className="montfont text-justify text-8 p-5"><Markdown source={current.content} escapeHtml={false}/></p>
                        <br/>
                        <p className="montfont p-5 text-9 text-left">
                            {current.date !== "" ?
                                <Moment format="DD/MM/YYYY - HH:mm">{current.date}</Moment> : 
                                <></>
                            }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
