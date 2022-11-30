import React from 'react';
import Post from './Post';
import './app.css';



export default class App extends React.Component {
    render() {
        return (
          <div>
                <h1>hello mundo</h1>
                <Post title= 'Apredendo react'/>
                <Post title= 'React.JS'/>
                <Post title= 'React'/>
            </div>
          

        );
    }
}
