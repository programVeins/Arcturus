import React, { Component } from 'react'
import * as contentful from 'contentful'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';


export default class BlogComp extends Component {
   
    state = {
        posts: []
      }

    client = contentful.createClient({
        space: 'cb0js1rlr1ot',
        accessToken: '9UFUkPaSG1dmwDtdevNj7eQKieybJO_cBZFotZDhM6s'
      })

    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }

    fetchPosts = () => this.client.getEntries()

    setPosts = response => {
        this.setState({
          posts: response.items
        })
    }

    render() {
        console.log(this.state.posts)
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="jostfont">Blog</h3>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row justify-content-center">
                    { this.state.posts.map(({fields}, i) =>
                        {
                            return (
                                    <div className={"col-lg-3 my-5 mx-5 blogcard p-0 " + (this.props.darkMode ? "carddark" : "cardlight")}
                                        onClick={() => this.props.changePost(i)}>
                                        <Link to={`/blog/${fields.path}`} className="nonedec">
                                            <img className="blogimg mb-5 " alt={fields.title} src={fields.pic.fields.file.url} height="auto" width="100%"/>
                                            <h5 className="jostfont">{fields.title}</h5>
                                            <p className="montfont text-justify p-4">{fields.content.substr(0,200)} ...</p>
                                            <p className="montfont text-left pl-4"><Moment format="YYYY/MM/DD">{fields.date}</Moment></p>
                                        </Link>
                                    </div>
                            );
                        }
                    )}
                </div>
                <br/><br/><br/>
            </div>
        )
    }

}