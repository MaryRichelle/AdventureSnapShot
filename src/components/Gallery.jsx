import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable'
import Images from './Images'
import { PhotoContext } from "../Context/PhotosContext"


const Container = styled.section`
width:90%;
min-height:80vh;
margin:auto;
display: flex;
flex-flow: row wrap;
gap:2rem;

`
const NotFound = styled.h2`
width: 20vh:
display: flex;
justify-content: center;
align-items:center ;
text-align: center;
color: #f0a5a5;
margin-top: 10rem; 
`
const Gallery = () => {
  const { searchResults, unsplashPhotosDetails } = useContext(PhotoContext)
  const [photos, setPhotos] = useState([])

  const onDragEnd = (event) => {
    const { active, over } = event
    if (!over) { return; }
    if (active.id === over.id) {
      return;
    }
    setPhotos(photos => {
      const oldIndex = photos.findIndex(photo => photo.id === active.id)
      const newIndex = photos.findIndex(photo => photo.id === over.id)
      return arrayMove(photos, oldIndex, newIndex)
    }
    )
  }
  useEffect(() => {
    setPhotos(unsplashPhotosDetails)
  }, [])

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={photos} strategy={rectSortingStrategy}>
        <Container>
          {
            photos &&
            (searchResults
              ? photos
                .filter(photo => photo.tag.some(tag => tag === searchResults))
                .map(photo => <Images photo={photo} key={photo.id} />)
              : undefined
                ? <NotFound>No photos found.</NotFound>
                : photos.map(photo => <Images photo={photo} key={photo.id} />)
            )
          }

        </Container>
      </SortableContext>
    </DndContext>
  )
}

export default Gallery