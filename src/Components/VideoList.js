import React from 'react'

const VideoList = ({videos,setSelectedVideo}) => {
  return (
    <div className='video-list'>
        {
            videos&&
                videos.map((video,index)=>(
                    <div onClick={()=>setSelectedVideo(video)} key={index}>
                    <img src={video.snippet.thumbnails.medium.url}alt={video.snippet.description} />
                    </div>
                )
  )
        }
        
    </div>
  )
  
}

export default VideoList