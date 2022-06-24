import React from "react";
import Album from "./Album";
import {useSelector} from "react-redux";

import "./AlbumContainer.css"

const AlbumContainer = ()=> {

  const results = useSelector( data => data.results)

  console.log("on Album Container",results)
  return (
    <div className="AlbumContainer">
        {
          results.map((data,id) => <Album title={data.collectionCensoredName} imageURL={data.artworkUrl100} description={data.releaseDate} key={id}/>)
        }
    </div>
  )
}


export default AlbumContainer