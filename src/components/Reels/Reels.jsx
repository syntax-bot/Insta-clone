import React, { Component, useState } from 'react'
import './Reels.css'
import ReelsShimmer from './ReelsShimmer'

export default function Reels() {
  const [reels,setreels]=useState([]);
  const [fullScreen,setFullScreen]=useState(undefined);
  let items; 
  if (fullScreen!==undefined) {
     items=(
      <div className='reelCard'>

      </div>
     );
  }
  else{
    items=<div className='reelCard'></div>
  }


  return (
    <div className='Reels'>
      <ReelsShimmer/>
      {
        items
      }
    </div>
  );
}
