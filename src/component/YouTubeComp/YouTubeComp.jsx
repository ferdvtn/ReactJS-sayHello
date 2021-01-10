import React from "react";
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <p>Image thumb here</p>
            <p>{props.title}</p>
            <p>{props.duration}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    title: 'Title here',
    duration: '0:00'
}

export default YouTubeComp;