import React, { useState } from 'react'
import axios from 'axios';
const SearchBar = ({setVideos}) => {
    let[search,setSearch]= useState("");
    // let[videos,setVideos]= useState("")
    // console.log(videos)
    function implementSearch(){
axios.get("https://www.googleapis.com/youtube/v3/search",{
params:{
    // key:"AIzaSyBthob-93FiGvV3iLtabc4VY2NUm-rZIQQ",
    key:"AIzaSyBoCAoC1Iufl4IbBu8EyX8-Of1ytVB467I",
    part:"snippet",
    maxResults:90,
    type:"video",
    q:search


}
})
.then(response=>setVideos(response.data.items))
.catch(err=>console.log(err))
    }
  return (
    <div className='searchbar'>
        <input type='text' placeholder='SearchBar' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={implementSearch}>Search</button>
    </div>
  )
}

export default SearchBar