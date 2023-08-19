import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {
  return (
    <div className="w-1/2 bg-green-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]">
      
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
      A Random Gif
      </h1>
      {
        loading?(<Spinner/>):(<img src={gif} width='450'></img>)
      }
      <button>
      
      </button>
    </div>
  )
}

export default Random
