import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag,setTag]=useState('car');
    const {gif,loading,fetchData}=useGif(tag);
  return (
    <div className="w-1/2 bg-yellow-300 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[50px]">
      
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
      A Random {tag} Gif
      </h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="450" height="450" ></img>)
      }
      <h2>Please enter below the type of GIF you want:-</h2>
      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
      />
      <button className="w-10/12 bg-yellow-600 text-lg py-2 rounded-lg mb-[20px]" onClick={()=>fetchData(tag)}>
      Generate
      </button>
    </div>
  )
}

export default Tag