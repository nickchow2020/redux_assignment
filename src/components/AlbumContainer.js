import React,{useEffect}from "react";
import Album from "./Album";
import {useSelector,useDispatch} from "react-redux";
import {getDefaultDisplay} from "../redux/actionCreator"


import "./AlbumContainer.css"

const AlbumContainer = ()=> {

  const dispatch = useDispatch()

  const {init,perform} = useSelector( data => data)

  useEffect(()=>{
    const performData = [...init.results.slice(0,20)]

    const performInitState = {
      resultCount:performData.length,
      results:performData}

    dispatch(getDefaultDisplay(performInitState))

  },[init.results])

  return (
    <div className="AlbumContainer">
        {
          perform.results.map((data,id) => <Album title={data.collectionCensoredName} imageURL={data.artworkUrl100} description={data.releaseDate} key={id}/>)
        }
    </div>
  )
}


export default AlbumContainer