import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {
  const {loading,gif,fetchData}=useGif();
  return (
    <div className="w-1/2 bg-yellow-300 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]">
      
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
      A Random Gif
      </h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="300" height="300" ></img>)
      }
      
      <button className="w-10/12 bg-yellow-600 text-lg py-2 rounded-lg mb-[20px]" onClick={()=>fetchData()}>
      Generate
      </button>
    </div>
  )
}

export default Random
