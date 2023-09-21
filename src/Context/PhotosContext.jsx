import React, { createContext, useState, useEffect } from 'react'
import { unsplashPhotosDetails } from "../data/photos"

export const PhotoContext = createContext()


const PhotosContext = ({ children }) => {
  const [searchResults, setSearchResult] = useState("")

  const [tags, setTags] = useState([]) 
  useEffect(()=>{
  unsplashPhotosDetails.map(photos=>
    setTags(photos.tag))
  })
  const value = {
    unsplashPhotosDetails, tags, searchResults, setSearchResult
  }
  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  )
}

export default PhotosContext