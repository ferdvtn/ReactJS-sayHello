import React from "react";
import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <p className="post-title">{ props.data.title }</p>
                <p className="post-desc">{ props.data.body }</p>
                <button className="btn-danger" onClick={() => props.remove(props.data.id)}>remove</button>
            </div>
            <div className="post-img">
                <img src="https://placeimg.com/150/220/tech" alt=""/>
            </div>
        </div>
    )
}

Post.defaultProps = {
    title: 'Your Title',
    body: 'Your Description',
}

export default Post;