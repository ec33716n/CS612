import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=ac1c903510d548bdbcad31ac127a651d")
            .then(res => res.json())
            .then((findresponse)=>
        {
            console.log(findresponse.articles)
            this.setState({data:findresponse.articles, })
        })


    }

    render(){

        return (
            <nav>
                <ul>
                    <Link to="/"><b>Home</b></Link>
                </ul>
                <hr></hr>
                <b>Top Google Headlines</b>

                        {this.state.data.map(data =>
                        <p><div><a href={data.url}>{data.title}</a></div></p>
                        )}

            </nav>

        );
    }
}
export default Nav;
