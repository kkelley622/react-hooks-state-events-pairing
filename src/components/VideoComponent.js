import React, { useState } from "react"
import Comments from "./Comments"

function VideoComponent({ videoObj }) {
    const [videoInfo, setVideoInfo] = useState(videoObj);
    const [isVisible, setIsVisible] = useState(true)
    
    

    function handleLikes() {
        let video = {...videoInfo};
        video.upvotes = video.upvotes + 1;
        setVideoInfo(video)
    }

    function handleDislikes() {
        let video = {...videoInfo};
        video.downvotes = video.downvotes + 1;
        setVideoInfo(video)
    }

    function handleVisibility() {
        setIsVisible(!isVisible)
    }

    return (
        <div className="App">
            <iframe
            width="919"
            height="525"
            src={videoInfo.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={videoInfo.title}
            />
            <h1>{videoInfo.title}</h1>
            <span>Views | Uploaded {videoInfo.createdAt}</span>
            <button onClick={handleLikes}>{videoInfo.upvotes} 👍 </button>
            <button onClick={handleDislikes}>{videoInfo.downvotes} 👎 </button>
            <button onClick={handleVisibility}> {isVisible ? "Hide Comments" : "Show Comments"} </button>
            {isVisible ? <Comments commentsData={videoInfo.comments}/> : ""}
      </div>
    )
}

export default VideoComponent;