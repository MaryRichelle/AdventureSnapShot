import React from 'react'
import UploadForm from '../form/UploadForm'
import ImageGrid from "./ImageGrid"
import styled from 'styled-components'
import Nav from "./Nav"


const Container = styled.section`
width:100%;
margin-top: 5rem;
display:grid;
place-items: center;
`

const YourGallery = () => {
  return (
    <>
      <Nav />
      <Container>
        <h2>Your Personal Gallery</h2>
        <UploadForm />
        <ImageGrid/>
      </Container>
    </>
  )
}

export default YourGallery