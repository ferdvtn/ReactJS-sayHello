import React from "react";
import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <p className="post-title" onClick={() => props.goDetail(props.data.id)}>{ props.data.title }</p>
                <p className="post-desc">{ props.data.body }</p>
                <hr style={ {margin: "10px auto"} }/>
                <button className="btn btn-success" onClick={() => props.edit(props.data)}>edit</button>
                <button className="btn btn-danger" onClick={() => props.remove(props.data.id)}>remove</button>
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