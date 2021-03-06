import React /* { useState, useEffect } */ from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  // making a request from our hook.
  const {data:images,loading} = useFetchGifs(category);

  return (
    // We're returning a fragment
    <>
      <h3>{category.toUpperCase()}</h3>
      {/* Loader */}
      {loading && <p className="animate__animated animate__flash" >Loading...</p> }
      {/* Gif container */}
      <div className='card-flex' >
        {images.map((img) => (
          <GifGridItem
          key={img.id}
          {...img}
          />
          ))}
      </div>
          </>
  );
};
