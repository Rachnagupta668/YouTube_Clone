import React from 'react'

const VideoPlay = ({selectedVideo}) => {
  return (
    <div className='video-play'>{
        selectedVideo && (
            <div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}></iframe>
            <h3>{selectedVideo.snippet.title}</h3>
            </div>

        )
    }</div>
  )
}

export default VideoPlay