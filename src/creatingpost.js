import React from 'react';
import './App.css';
import logo from './logo.svg';
function CreatingPost(props) {

    return (    
        <div className="post-body">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{props.postParagraph} {props.counter}</p>
            <button>More</button>
        </div>
    )
}

export default CreatingPost;
