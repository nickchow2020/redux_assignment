import React,{useEffect}from "react";
import Album from "./Album";
import {useSelector,useDispatch} from "react-redux";
import {getDefaultDisplay} from "../redux/actionCreator"
import ResultDisplay from "./ResultDisplay"
import Loading from "./Loading";
import AddOnBtn from './AddOnBtn';

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

  console.log("is me perform",perform)
  console.log("is me init",init)

  return (
    <div className="displayBody">
    {
      perform.loading 
      ? <Loading /> 
      :<><div className="AlbumResultSection">
      <ResultDisplay />
    </div>
    <div className="AlbumContainer">
      {
          perform.results.map((data,id) => <Album title={data.collectionCensoredName} imageURL={data.artworkUrl100} description={data.releaseDate} key={id}/>)
      }
    </div>
    <AddOnBtn /></>
    }
    </div>
  )
}


export default AlbumContainer