import React from 'react'
import '../Videoplayer/Videoplayer.css'
import video from '../../assets/college-video.mp4'

function Videoplayer({playState, setPlayState}){
  return (
    <div className={`video-player ${playState?'': 'hide'}`}>
   <video src={video} autoPlay muted controls></video>        
    </div>
  )
}

export default Videoplayer
