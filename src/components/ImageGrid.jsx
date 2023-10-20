import React from 'react'
import useFirestore from "../Hooks/UseFirestore"
import Images from "./Images"
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
flex-flow:row wrap;
justify-content: space-around;
align-items:center;

`

const Img = styled.img`
width: 15rem;
aspect-ratio: 4/5;
`
const ImageGrid = () => {
  const docs = useFirestore("images")
  console.log(docs);
  return (
    <Wrapper> {docs && docs.map(doc => 
      (
      <div key={doc.id}>
        {/* <Images /> */}
        <Img src={doc.url} alt="some" />

      </div>
    )
    )}</Wrapper>
  )
}

export default ImageGrid