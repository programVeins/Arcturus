import React, { Component } from 'react'
import * as contentful from 'contentful'


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
        console.log(response.items)
        this.setState({
          posts: response.items
        })
    }

    render() {
        console.log(this.state.posts[0])
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="jostfont">Blog</h3>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    { this.state.posts.map(({fields}, i) =>
                        {
                            console.log(fields)
                            return (
                                <div className="col-3">
                                    {fields.title}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        )
    }
}
