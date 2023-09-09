import './App.css';
import React,{useState} from "react"
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoPlay from './Components/VideoPlay';
const App=()=> {
  let[videos,setVideos]= useState("")
  let[selectedVideo,setSelectedVideo]=useState("")
  //  console.log(videos)
   console.log(setSelectedVideo)

  return (
    <div>
     <SearchBar setVideos={setVideos}/>
     <div className='videos'>
     <VideoPlay selectedVideo={selectedVideo} />

      <VideoList videos={videos} setSelectedVideo={setSelectedVideo}/>
     </div>
    </div>
  );
}

export default App;
