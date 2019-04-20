import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Main extends Component {
    render() {
        return (

            <main>
                <h1>Welcome to my First Single Page Application Using ReactJS!</h1>
                <p>This page contains all the blog posts I've created.  Also on the side is the latest News articles.</p>



                <div>
                    <p><Link to ="/Post1"><h1>I'm Hungry!</h1></Link> 3.3.2019</p>
                    <img src={require('./img/1.jpg')} width='250' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <hr></hr>

                <div>
                    <p><Link to ="/Post2"><h1>I'm Sleepy!</h1></Link> 2.2.2019</p>
                    <img src={require('./img/2.jpg')} width='250' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <hr></hr>

                <div>
                    <p><Link to ="/Post3"><h1>I'm Bored!</h1></Link> 1.1.2019</p>
                    <img src={require('./img/3.jpg')} width='250' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

            </main>


        );
    }
}

export default Main;
