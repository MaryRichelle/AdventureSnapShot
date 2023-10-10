import React from 'react'
import Gallery from './Gallery'
import Nav from "./Nav"
import styled from 'styled-components'

const Main = styled.main`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
gap:4rem;
`


const MainPage = () => {


  return (
    <Main>
      <Nav />
      <Gallery />
    </Main>
  )

}
export default MainPage;


