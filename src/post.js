import React, {Component} from 'react';
import CreatingPost  from './creatingpost.js';

import './App.css';


class Post extends Component {
    render() {
        return(
            <div>
                <CreatingPost postParagraph="This is an example paragraph 1 = > " counter={1}/>
                <CreatingPost postParagraph="This is an example paragraph 2 = > " counter={11}/>
                <CreatingPost postParagraph="This is an example paragraph 3 = > " counter={111}/>
            </div>
        )
    }
}
export default Post;