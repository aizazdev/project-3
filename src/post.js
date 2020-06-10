import React, {Component} from 'react';
import CreatingPost  from './creatingpost.js';

import './App.css';


class Post extends Component {
    render() {
        return(
            <div>
                <CreatingPost postParagraph="This is an example paragraph" counter={1}/>
                <CreatingPost postParagraph="This is an example paragraph" counter={11}/>
                <CreatingPost postParagraph="This is an example paragraph" counter={111}/>
            </div>
        )
    }
}
export default Post;